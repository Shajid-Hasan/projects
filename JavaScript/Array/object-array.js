const numbers = [1, 2, 35, 75, 2];
const players = [{}, {}, {}];
const employees = [
    {name: 'Ashik', designation: 'content writer', salary: 25000},
    {name: 'Atik', designation: 'Developer', salary: 29000},
    {name: 'Onik', designation: 'Digital Marketer', salary: 21000}
]

employees[0].name = 'Asraf';

// console.log(employees[1].salary);

// for(const employee of employees){
//     console.log(employee.salary, employee.designation);
// }

for (const emp of employees){
    const person = emp;
    const personInfo = person.name + ' ' + person.salary;
    console.log(personInfo);
}