const employee = {
    name: "Ali",
    designation: "QA",
    salary: 20000,
    experiance: 1,
    age: 22,
};

// delete employee.experiance
Object.freeze(employee)
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee);
