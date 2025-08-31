const numbers = [87, 8, 5, 91];
// console.log(numbers);
console.log(...numbers);

// const max = Math.max(55, 45, 75, 78, 89);
const max = Math.max(...numbers);
console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);
// console.log(second);

// spread

const first = [1, 2, 3, 4, 5];
const second = [...first];
second.push(6);
console.log(first);
console.log(second);

const ages = [45, 30, 55, 62];
const prices = [20, 30, 40, 50];
const all = [0, ...ages, 12345, ...prices];
console.log(all);

// object

const person = { name: "Alex", age: 15 };
const employee = { designation: "developer", ...person };
console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(55, 53, 44);
const digits = [78, 55, 66];
total(...digits)
