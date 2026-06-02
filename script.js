let students =
JSON.parse(
localStorage.getItem("students")
) || [];

function saveData(){

localStorage.setItem(
"students",
JSON.stringify(students)
);

}

function addStudent(){

let name =
document.getElementById("name").value;

let course =
document.getElementById("course").value;

let marks =
document.getElementById("marks").value;

if(
name === "" ||
course === "" ||
marks === ""
){

alert("Please fill all fields");

return;
}

students.push({

id: Date.now(),

name: name,

course: course,

marks: marks

});

saveData();

displayStudents();

document.getElementById("name").value = "";
document.getElementById("course").value = "";
document.getElementById("marks").value = "";

}

function displayStudents(){

let table =
document.getElementById(
"studentTable"
);

table.innerHTML = "";

students.forEach(
(student,index)=>{

table.innerHTML += `

<tr>

<td>${index+1}</td>

<td>${student.name}</td>

<td>${student.course}</td>

<td>${student.marks}</td>

<td>

<button
class="delete-btn"
onclick="deleteStudent(${student.id})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById(
"studentCount"
).innerText = students.length;

}

function deleteStudent(id){

students =
students.filter(

student =>
student.id !== id

);

saveData();

displayStudents();

}

function searchStudent(){

let value =
document
.getElementById("search")
.value
.toLowerCase();

let rows =
document.querySelectorAll(
"#studentTable tr"
);

rows.forEach(row=>{

let text =
row.innerText.toLowerCase();

row.style.display =
text.includes(value)
? ""
: "none";

});

}

displayStudents();