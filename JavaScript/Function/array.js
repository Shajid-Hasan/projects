/**
 * objective : write a function give me the sum of all numbers in an arry
 * Step -1 : declare a function
 * step -2 : call cheack wheather the function is called properly
 * step -3 : set a perameter(s)
 * step -4 : pas the parameter (s), check wheather parameter is passed in a proper format.
 * step -5 : do the function tasks (step by step)
 * */

function sumOfFunction(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
    
}

const numbs = [54, 62, 12, 6];
const sum = sumOfFunction(numbs);
console.log("Sum of numbers is :", sum);
