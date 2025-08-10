function noNumberDuplicate(numbers){
    const realNumber = [];
    for(const number of numbers){
        if(realNumber.includes(number) === false){
            realNumber.push(number);
        }
    }
    return realNumber;
}

const number = [1, 7, 7, 501, 650, 650, 871, 451, 214, 214];
const check = noNumberDuplicate(number);
console.log(check);