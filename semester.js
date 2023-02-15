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

function calcRank(a){
  if(a>=3.5){
    return "A";
  }
  else if(a<3.5 && a>=2.5){
    return "B";
  }
  else if(a<2.5 && a>=1.5){
    return "C";
  }
  else if(a<1.5 && a>=1){
    return "D";
  }
  else if(a<1){
    return "F";
  }
}

add.addEventListener("click", () => {
  console.log(unitLoad.value);
  if ((unitLoad.value < 0 || unitLoad.value >= 5) || (grade.value < 0 || grade.value > 100)) {
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
    if(grade.value =="" || grade.value < 60){
      tdgpaSubject.innerHTML=` ${("-")}`;}
    else{tdgpaSubject.innerHTML =`${(((grade.value) / 10) - 5).toFixed(2)} `;}
    const tdUnitLoad = document.createElement("td");
    if(unitLoad.value == ""){
      tdUnitLoad.innerHTML=` ${("-")}`;}
    else{tdUnitLoad.innerHTML = unitLoad.value;}
    const tdGrade = document.createElement("td");
    if(grade.value ==""){
      tdGrade.innerHTML=` ${("-")}`;}
    else{tdGrade.innerHTML = grade.value;}
    const tdRank = document.createElement("td");
    if(grade.value ==""){
      tdRank.innerHTML=` ${("-")}`;}
    else{tdRank.innerHTML = calcRank((((grade.value) / 10) - 5));}
    tr.appendChild(tdCourseName);
    tr.appendChild(tdgpaSubject)
    tr.appendChild(tdUnitLoad);
    tr.appendChild(tdGrade);
    tr.appendChild(tdRank);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcGp.classList.remove("display-none");
    clear.classList.remove("display-none");
    if(grade.value >=60){
    gpArry.push({
      unitLoad: unitLoad.value,
      grade: grade.value,
    });}
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
  tdTotalUnitLoad.setAttribute("colspan", "1");
  tdTotalUnitLoad.innerHTML = `your total unit load is ${unitLoads}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `your GPA is ${(
    ((sumOfProductOfUnitLoadsAndGrades / unitLoads) / 10) - 5
  ).toFixed(2)} `;

  tdTotalRank = document.createElement("td");
  tdTotalRank.setAttribute("colspan","2");
  tdTotalRank.innerHTML = `your Rank is ${calcRank((
    ((sumOfProductOfUnitLoadsAndGrades / unitLoads) / 10) - 5
  ))} `;

  tr.appendChild(tdTotalUnitLoad);
  tr.appendChild(tdGpa);
  tr.appendChild(tdTotalRank);
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