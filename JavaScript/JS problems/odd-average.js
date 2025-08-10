/**
 * Function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * put odd numbers in an array
 * 
 */

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
    }

    // odds is the array that contains only the odd number.
    // console.log(odds)

    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 7, 105];
const average = oddAverage(numbers);
console.log("average of the odd numbers is : ", average);
