
// function declaration
function add(num1, num2){
    return num1 + num2;
}

// function expression

const addition = function(num1, num2){
    return num1 + num2
}

// arrow function

const add2 = (num1, num2) => num1 + num2
const multiply = (a, b) => a * b
const sumAll = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g
const isFirstBig = (x, y) => x > y

// multi line arrow function
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    console.log(result)
}
doMath(2,3)

const result = add2(17, 13);
const mult = multiply(2, 5)
const sum = sumAll(1, 2, 3, 4, 5, 6, 7)
const big = isFirstBig(5,8)
console.log(result, mult, sum, big);