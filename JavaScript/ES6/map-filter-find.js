const students = [
    { id: 1, name: "Ratul", marks: 90 },
    { id: 2, name: "Sonul", marks: 95 },
    { id: 3, name: "Kabul", marks: 92 },
    { id: 1, name: "Matul", marks: 94 },
];

const name = students.map((student) => student.marks * 0.75);
const goodStudent = students.filter(student => student.marks>92)
const firstStudent = students.find(student => student.marks>94)

console.log(firstStudent);
