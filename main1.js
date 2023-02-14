const add = document.querySelector("#add");
const oldGpa = document.querySelector("#oldgpa");
const oldUnit = document.querySelector("#old-unit-load");
const newGpa = document.querySelector("#newgpa");
const newUnit = document.querySelector("#new-unit-load");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
let x = 1;
let y = 0; 
let gpArry = [];

add.addEventListener("click", () => {
  console.log(oldUnit.value);
  if ((oldGpa.value < 0) || (oldUnit.value < 0) || (newGpa.value < 0) || (newUnit.value <0)) {
    alert("Wrong input,check and try again");
  } else {
  console.log(oldUnit.value);
    const tr = document.createElement("tr");
    const tdOldGpa = document.createElement("td");
    if(oldGpa.value ==""){
        tdOldGpa.innerHTML=` ${(y)}`;}
    else{tdOldGpa.innerHTML = oldGpa.value;}
    const tdOldUnit = document.createElement("td");
    if(oldUnit.value ==""){
        tdOldUnit.innerHTML=` ${(y)}`;}
    else{tdOldUnit.innerHTML = oldUnit.value;}
    const tdNewGpa = document.createElement("td");
    if(newGpa.value == ""){
        tdNewGpa.innerHTML=` ${(y)}`;}
    else{tdNewGpa.innerHTML = newGpa.value;}
    const tdNewUnit = document.createElement("td");
    if(newUnit.value ==""){
        tdNewUnit.innerHTML=` ${(y)}`;}
    else{tdNewUnit.innerHTML = newUnit.value;}
    tr.appendChild(tdOldGpa);
    tr.appendChild(tdOldUnit)
    tr.appendChild(tdNewGpa);
    tr.appendChild(tdNewUnit);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      oldGpa: oldGpa.value,
      oldUnit: oldUnit.value,
      newGpa: newGpa.value,
      newUnit: newUnit.value,
    });
    console.log(gpArry);
    oldGpa.value = "";
    oldUnit.value = "";
    newGpa.value = "";
    newUnit.value = "";
  }
  form1.classList.add("display-none");
});

calcGp.addEventListener("click", () => {
  let totalUnitLoads = 0,
    newRate = 0,
    oldRate = 0,
    sumRate = 0;

  gpArry.forEach((result) => {
    totalUnitLoads = parseInt(result.oldUnit) + parseInt(result.newUnit) ;
    newRate = parseFloat(result.newUnit) * parseFloat(result.newGpa);
    oldRate = parseFloat(result.oldUnit) * parseFloat(result.oldGpa);
    sumRate = newRate + oldRate ;
  });
  const tr = document.createElement("tr");

  tdTotalUnitLoad = document.createElement("td");
  tdTotalUnitLoad.setAttribute("colspan", "2");
  tdTotalUnitLoad.innerHTML = `Your Total Unit Load is ${totalUnitLoads}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your GPA is ${(sumRate/totalUnitLoads).toFixed(3)} `;

  tr.appendChild(tdTotalUnitLoad);
  tr.appendChild(tdGpa);
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }
  tfoot.appendChild(tr);
});

clear.addEventListener("click", () => {
  gpArry = [];
  x=1;
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }

  table.classList.add("display-none");
  calcGp.classList.add("display-none");
  clear.classList.add("display-none");
  form1.classList.remove("display-none");
});