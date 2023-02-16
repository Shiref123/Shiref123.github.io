class sbj {
  constructor() {
    this.courseName = courseName,
      this.credits = credits,
      this.grade = grade,
      this.score = score,
      this.gp = gp,
      this.rank = rank;
  }
};

function remove(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("se-gpa-table").deleteRow(i);
  
  }
  function addRow() {
    var table = document.getElementById("se-gpa-table");
    table.insertRow(-1);
  }
function add(){
  addRow();
  var table = document.getElementById("se-gpa-table");
  var lastRow = table.rows[ table.rows.length - 1 ];
  var CourseCell = lastRow.insertCell(-1);
  CourseCell.innerHTML = '<input type="text" class="form-control" id="course-name" placeholder="Course Name"required>';
  var CreditCell = lastRow.insertCell(-1);
  CreditCell.innerHTML = '<input type="number" class="form-control" id="credits" placeholder="Credits"  required>';
  var GradeCell = lastRow.insertCell(-1);
  GradeCell.innerHTML = '<input type="number" class="form-control" id="grade" placeholder="Grade" required>';
  var ButtonCell = lastRow.insertCell(-1);
  ButtonCell.innerHTML = '<button  onclick="remove(this)" class="btn"><i class="bi bi-trash3-fill text-danger"></i></button>';
}
function calcRank(){
  if(sbj.score>=3.5){
    return "A";
  }
  else if(sbj.score<3.5 && sbj.score>=2.5){
    return "B";
  }
  else if(sbj.score<2.5 && sbj.score>=1.5){
    return "C";
  }
  else if(sbj.score<1.5 && sbj.score>=1){
    return "D";
  }
  else if(sbj.score<1){
    return "F";
  }
}
//gpa المادة الواحدة
function calcSbjScore(){
  let sbjScore= (((spj.grade)/10)-5).toFixed(2);
  return sbjScore;
}
function calcSbjGp(){
  let sbjGPA= spj.credit * spj.score;
  return sbjGPA;
}
