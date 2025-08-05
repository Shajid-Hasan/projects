const person = {
    name: 'Fahim',
    age: 25,
    profession: 'developer',
    salary: 25000,
    marrried: true,
    "fav places": ['bandarban', 'saintmartin', 'kuakata']
}
person.salary = 30000;
person['age']  = 26;
person["fav places"] = ['maldip','thailand', 'dubai'];
console.log(person);

const keyName = 'profession';
console.log(person[keyName]);

const profName = 'profession';
person[profName] = 'devOps';
console.log(person);