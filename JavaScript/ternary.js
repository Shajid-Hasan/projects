/*
*TERNARY --> THREE PART
*   ?   :
*
*
*   CONDITION ? DO SOMETHING WHEN TRU : DO SOMETHING WHEN FALSE
*
*/ 


// const age = 20;
// if (age >= 18){
//     console.log('You can votge');
// }
// else{
//     console.log('Dont move outside');
// }

// age >= 18 ? console.log('You can vote') : console.log('Dont move outside');

let price = 200;
const isLeader = true;

// price = isLeader === true? 0 : price + 100;

// Optional

// if(isLeader === true ){
//     if(price > 1000){
//         price = price /2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 1000;
// }

price = isLeader === true? price > 1000 ? price / 2 : price = 0 : price + 1000;