const { price, quantity, tax = 8 } = { name: "shirt", price: 500, quantity: 7 };

// console.log(price, quantity, tax);

// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price

// const discount = (price * 20) / 100;
// const yourPay = price - discount;
// const vatAmount = (price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmount = yourPay + vatAmount;

const device = { name: "samsung", price: 17000, device: "phone" };
const { brand } = device;

// -----------------------------------//

const numbers = [25, 28];
const [first, second] = numbers;
const [math, physics] = [99, 90];
console.log(second, physics);
