// 12 ins 1 feet

// function insToFeet(inch){
//     const feet = inch / 12;
//     return feet;
// }


// 75
function insToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    // console.log(feetNumber);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
    return result;
}

const height = insToFeet(75);
// console.log(height);

// Miles to kilometer

function mileToKilometer (){
    const kilo = mile * 1.60934;
    return kilo;
}

function kiloMeterToMile (kilo){
    const mile = kilo * 0.621371;
    return mile;
}