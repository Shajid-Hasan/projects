function evenAverage(numbers){
    let even = [];
    for(const number of numbers){
        if(number % 2 === 0){
            // console.log(number);
            even.push(number);
        }
    }
    console.log(even);
    let sum = 0;
    for(const number of even){
        sum = sum + number;
    }
    const count = number.length;
    console.log(sum, count);
    return sum;
}

const number = [14, 17, 71, 89, 12, 16, 13, 28, 468];
const average = evenAverage(number);
console.log("Total even number is : ", average);