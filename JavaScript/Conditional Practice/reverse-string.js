// Reverse string

const sentence = 'I am learning web dev';

//Using  (For Of)

// let reverse = '';
// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// Using (For loop)

let rev = '';

for(let i = 0; i<sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// Shortcut

const reverse = sentence.split(' ').reverse().join(' ');
console.log(reverse);
