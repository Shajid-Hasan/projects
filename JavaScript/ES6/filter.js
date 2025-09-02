const numbers = [2, 4, 8, 70, 15, 40, 9, 5];
const graterThan10 = numbers.filter((x) => x > 10);
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
