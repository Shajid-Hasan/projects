const student = {
    name: "Jeson",
    marks: 90,
    "home-address": "Dhaka",
    1: 20,
};

// Dot notation
const studentName = student.name;

// Braket notaion
const studentId = student["1"];
const studentName2 = student["name"];

console.log(studentId, studentName2);
console.log(student["home-address"]);

// Loop

for (const key in student) {
    const student = student[key]
    console.log(key);

}
