function sum(num1 = 0, num2 = 0){
    const total = num1 + num2;
    console.log(num1, num2, total);
}

sum (10)
sum(10, 40)


function multiply(num1 = 1, num2 = 1){ // when using multipy not use default valuw 0, use 1
    const total = num1 * num2 ;
    console.log(num1, num2, total);
}

multiply(10)
multiply(10, 40)

// String
function fullName(name1 = '', name2 = ''){
    const fullName = name1 + ' ' + name2;
    console.log('User Name :' , fullName)
}
fullName('Shajid', 'Hasan')

// Array
function number(num = []){
    const total = num;
    console.log(total);
}
number();

// Object

function object(name = {}){
    const students = name;
    console.log(students)
}
object({
        name: 'shajid',
        age: 30,
        subject: 'CSE',
        grade: 2.59,
        skill: 'Front end developer'
    })
object()

/**\
 * some ( thumb rule ) of default value. may be useful
 * 
 * add,  substruct --> 0
 * 
 * multiply --> 1\
 * 
 * string --> '' (Thumb rule)
 * 
 * array = []
 * 
 * object = {}
 */