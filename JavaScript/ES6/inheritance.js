// This operation example ---> 3

class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal{
    constructor(name, color, age){
        super(name, color)
        this.age = age;
    }
    
    bark(){
        console.log(`${this.name} is barking`)
    }
}

const dog1 = new Dog('Thailandi', 'cofee', 4);
const dog2 = new Dog('Zeerman shefard', 'black', 5);
dog1.eat();
dog2.bark();
console.log(dog1);
console.log(dog2);

// This operation example ---> 3

class Cat extends Animal{
    constructor(name, color, weight){
        super(name, color)
        this.weight = weight;
    }

    bark(){
        console.log(`${this.name} is barking`)
    }
}

const cat1 = new Dog('Partian', 'white', 4);
const cat2 = new Dog('Japani', 'brown', 5);
cat1.eat();
cat2.bark();
console.log(cat1);
console.log(cat2);