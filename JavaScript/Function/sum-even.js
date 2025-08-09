function sumOfEvenNumber (numbers){
    let sum = 0;
    for(const number of numbers){
        if(number%2===0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const number = [18, 11, 17, 14, 66, 31];
const pushNumber = number.push(48);
const sum = sumOfEvenNumber(number);
console.log("some of even number :", sum);