const numbers = [1, 24, 5, 7, 8, 9, 10];
for(const num of numbers){
    console.log(num);
}

const employee = {
    name: "Ali",
    designation: "QA",
    salary: 20000,
    experiance: 1,
    age: 22,
};

for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}

