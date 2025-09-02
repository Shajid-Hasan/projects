/**
 * class --> template
 * properties
 * 
 * 
 * 
 * object
 */

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Europe';
    }
    goal(){
        console.log('score a goal')
    }
    getTeamName(){
        console.log('Barsa')
    }
}

const player1 = new Player('Ronaldo', 35 );
const player2 = new Player('Naimer', 32);
player1.goal()
player1.getTeamName()

console.log(player1);
console.log(player2);


// This operation example ---> 2

class Student {
    constructor(name, id, marks){
        this.name = name;
        this.id = id;
        this.marks = marks;
    }
    getInfo(){
        console.log(`Name : ${this.name}, Id : ${this.id}, Marks : ${this.marks}`);
    }
}

const s1 = new Student('shajid', 12, 98);
const s2 = new Student('Hasan', 13, 95);
const s3 = new Student('Roman', 12, 96);

s1.getInfo();
s2.getInfo();
s3.getInfo();
