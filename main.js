const add = document.querySelector("#add");
const courseName = document.querySelector("#course-name");
const unitLoad = document.querySelector("#unit-load");
const grade = document.querySelector("#grade");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcGp = document.querySelector("#calc-gp");
const clear = document.querySelector("#clear");
let x = 1;
let y = 0; 
let gpArry = [];

add.addEventListener("click", () => {
  console.log(unitLoad.value);
  if ((unitLoad.value < 0 || unitLoad.value > 5) || (grade.value < 0 || grade.value > 100)) {
    alert("Wrong input,check and try again");
  } else {
  console.log(unitLoad.value);
    const tr = document.createElement("tr");
    const tdCourseName = document.createElement("td");
    if(courseName.value == ""){
      courseName.value = `subject NO.${x}`; 
      x++; 
    }
    tdCourseName.innerHTML = courseName.value;
    const tdgpaSubject = document.createElement("td");
    if(grade.value ==""){
      tdgpaSubject.innerHTML=` ${(y)}`;}
    else{tdgpaSubject.innerHTML =`${(((grade.value) / 10) - 5).toFixed(2)} `;}
    const tdUnitLoad = document.createElement("td");
    if(unitLoad.value == ""){
      tdUnitLoad.innerHTML=` ${(y)}`;}
    else{tdUnitLoad.innerHTML = unitLoad.value;}
    const tdGrade = document.createElement("td");
    if(grade.value ==""){
      tdGrade.innerHTML=` ${(y)}`;}
    else{tdGrade.innerHTML = grade.value;}
    tr.appendChild(tdCourseName);
    tr.appendChild(tdgpaSubject)
    tr.appendChild(tdUnitLoad);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      unitLoad: unitLoad.value,
      grade: grade.value,
    });
    console.log(gpArry);
    courseName.value = "";
    unitLoad.value = "";
    grade.value = "";
  }
});

calcGp.addEventListener("click", () => {
  let unitLoads = 0,
    productOfUnitLoadsAndGrades = 0,
    sumOfProductOfUnitLoadsAndGrades = 0;

  gpArry.forEach((result) => {
    unitLoads += parseInt(result.unitLoad);
    productOfUnitLoadsAndGrades =
      parseInt(result.unitLoad) * parseInt(result.grade);
    sumOfProductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalUnitLoad = document.createElement("td");
  tdTotalUnitLoad.setAttribute("colspan", "2");
  tdTotalUnitLoad.innerHTML = `your total unit load is ${unitLoads}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your GPA is ${(
    ((sumOfProductOfUnitLoadsAndGrades / unitLoads) / 10) - 5
  ).toFixed(2)} `;

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
});