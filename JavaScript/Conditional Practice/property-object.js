const person = {
    name: 'Fahim',
    age: 25,
    profession: 'developer',
    salary: 25000,
    marrried: true,
    "fav places": ['bandarban', 'saintmartin', 'kuakata']
}
// console.log(person);
const income = person.salary;
// console.log(income);

// Braket notation
console.log(person['age']);

const boyos = person['age']
console.log(boyos);

console.log(person["fav places"]);