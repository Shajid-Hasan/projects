
//Premitive

let price = 25;
let com_price = price;

com_price = 15;

// console.log(price);
// console.log(com_price);

// Non-premitive

const products =[25, 25, 25];
const com_products = [];

for(const product of products){
    com_products.push(product);
}

// const com_products = products;

com_products[0] = 15;
products[1]=55;
// console.log(products);
// console.log(com_products);

const numbers = [1, 2, 3, 4];
// const new_numbers = Array.from(numbers);
// const new_numbers = [].concat(numbers);
const new_numbers = [...numbers];

new_numbers.push(99);

console.log(numbers);
console.log(new_numbers);