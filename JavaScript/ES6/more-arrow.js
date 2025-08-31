const getTax = (amount, taxRate) => (amount * taxRate) / 100;
const add = (p, q) => p + q;

// single parammeter

const getSquare = (x) => x * x;
const getHalf = (number) => number / 2;
const firstElement = (number) => number[3];
const logIt = () => console.log(71); //[Undefined]

console.log(getSquare(8));
console.log(getHalf(18));
console.log(firstElement([1, 2, 3, 4]));
console.log(logIt());

// annymous function

// document.getElementById('').addEventListener('click', function(){

// })
// document.getElementById('').addEventListener('click', () =>{

// })
document.getElementById("btn-click").addEventListener("click", (event) => {});
