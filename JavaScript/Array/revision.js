/**
 * 1. const --> value not going to change
 * 2. let --> value might change
 * 3. var --> should not use ( unless exceptional case)
 */

// Primitive type OR Basic type

const price = 1500; // number 
const name = 'Titumir'; // string ("")
const isFighter = true; // boolean("")

// Non-Primitive type

const friends = ['Elon', 'Bilgets', 'Ambani', 'Jeff']; // Array
const student = { class: 9, name: 'Maxwell', age: 17, address: 'united state'} // Object

        // Condition

/*****************************
* if else || else if
****************************/

if(price > 1000){
    console.log('too expensive. not for me');
}
else if(price > 500){
    console.log('may be i can buy this');
}
else{
    console.log('within my budget');
}

        // Loop

/*********************
 * While Loop
 **********************/

let pushUp = 0;
while(pushUp < 10){
    console.log('Push up' , pushUp);
    // pushUp = pushUp + 1;
    // pushUp += 1;
    pushUp++;
}

/************************
 * For 
 ************************/

for( let i = 0; i<10; i++){
    console.log(i);
}