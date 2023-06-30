class sbj {
  constructor(courseName, credits, grade) {
    (this.courseName = courseName),
      (this.credits = credits),
      (this.grade = grade)
  }
  calcRank() {
    if (this.score >= 0){
      if (this.score >= 3.5) {
        this.rank = "A";
      } else if (this.score < 3.5 && this.score >= 2.5) {
        this.rank = "B";
      } else if (this.score < 2.5 && this.score >= 1.5) {
        this.rank = "C";
      } else if (this.score < 1.5 && this.score >= 1) {
        this.rank = "D";
      } else if (this.score < 1) {
        this.rank = "F";
      }
    }
  }
  calcSbjScore() {

    let sbjScore = 0;
    if (this.grade >= 60){
      sbjScore = parseFloat((this.grade / 10 - 5).toFixed(2));    
    }
    this.score = parseFloat(sbjScore);
    
  }
  calcSbjGp() {
    let sbjGPA = this.credits * this.score;
    this.gp = sbjGPA;
  }
  all(){
    this.calcSbjScore();
    this.calcSbjGp();
    this.calcRank();
  }
}

function calcTotal(arr){
let totalHrs = 0,TotalGP = 0,TotalGPA = 0; 

for (let i = 0 ; i < arr.length ; i++){
  if (!isNaN(arr[i].credits) && !isNaN(arr[i].grade)){
    totalHrs += arr[i].credits;
    TotalGP += arr[i].gp;
  }
}
TotalGPA = parseFloat((TotalGP / totalHrs).toFixed(2)) ;

console.log(`totalGp is ${TotalGP} and totalhrs is ${totalHrs} gpa is ${TotalGPA} ` );
let gpaRes = document.getElementById("gpa"); 
if (TotalGPA){
  gpaRes.value = TotalGPA; 
}else{
  document.getElementById("gpa").value = 0; 
}
function calcRankAll(score) {
  if (score >= 0) {
    if (score >= 3.5) {
      return "A";
    } else if (score < 3.5 && score >= 2.5) {
      return "B";
    } else if (score < 2.5 && score >= 1.5) {
      return "C";
    } else if (score < 1.5 && score >= 1) {
      return "D";
    } else if (score < 1) {
      return "F";
    }
  }
  return "F"; // Return an empty string if the score is invalid or negative
}
let gpaRank = document.getElementById("rank"); 
if (TotalGPA){
  gpaRank.value = calcRankAll(TotalGPA); 
}else{
  document.getElementById("rank").value = "F"; 
}
if (gpaRes.value >= 1){
  gpaRes.classList.remove("bg-danger");
  gpaRes.classList.add("bg-success");
  gpaRes.classList.add("text-white");

}else {
  gpaRes.classList.remove("bg-success");
  gpaRes.classList.add("bg-danger");
  gpaRes.classList.add("text-white");
}
}


//add & remove row
function remove(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("se-gpa-table").deleteRow(i);
  getData();
}
function addRow() {
  var table = document.getElementById("se-gpa-table");
  table.insertRow(-1);
}
function add() {
  addRow();
  var table = document.getElementById("se-gpa-table");
  var lastRow = table.rows[table.rows.length - 1];
  var CourseCell = lastRow.insertCell(-1);
  CourseCell.innerHTML =
    '<input type="text" class="form-control" id="course-name" placeholder="Course Name" required>';
  var CreditCell = lastRow.insertCell(-1);
  CreditCell.innerHTML =
    '<input type="number" class="form-control" id="credits" placeholder="Credits" min="0" max="6" required>';
  var GradeCell = lastRow.insertCell(-1);
  GradeCell.innerHTML =
    '<input type="number" class="form-control" id="grade" min="0" max="100" placeholder="Grade" required>';
  var ButtonCell = lastRow.insertCell(-1);
  ButtonCell.innerHTML =
    '<button  onclick="remove(this)" class="btn"><i class="fa-solid fa-trash-can text-danger"></i></button>';
}

function getData() {
  let records = [];
  var table = document.getElementById("se-gpa-table");
  for (var i = 0, row; (row = table.rows[i]); i++) {
    records[i] = new sbj();
    for (var j = 0, col; (col = row.cells[j]), j < 3; j++) {
      if (j == 0) {
        records[i].courseName = col.childNodes[0].value;
      } else if (j == 1 && !isNaN(col.childNodes[0].value)) {
        records[i].credits = parseFloat(col.childNodes[0].value) ;
      } else if (j == 2 && !isNaN(col.childNodes[0].value)) {
        records[i].grade = parseFloat(col.childNodes[0].value) ;
      }
      records[i].all();
    }
    
  }
  console.log(records); 
  calcTotal(records);
}
const button = document.getElementById("button");
window.onscroll = () =>{
  if (window.scrollY >= 600) {
    button.style.display ="block"
  }else{
    button.style.display ="none"

  }
}
button.addEventListener("click",()=>{
  window.scrollTo({
    left:0,
    top:0,

  })
})
