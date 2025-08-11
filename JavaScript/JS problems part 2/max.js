const disha = 56;
const salman =95;

if(disha > salman){
    console.log('Disha will get the starabery');
}
else{
    console.log('salman will eat staberry');
}

// Inside a function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(56, 44);
console.log("Max of two is :", max);