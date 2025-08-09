function evenNumbersOnly (numbers){
    const evens = []; 
    for(const number of numbers){
        if(number % 2 === 0){
            console.log("Output is even : ", number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [14, 78, 11, 55, 49, 22];
const evens = evenNumbersOnly(numbers);
console.log("even numbers are : ", evens);