const numbers = [1, 2, 3, 4, 5, 6];

const reversed = [];
// for(let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
//     reversed.unshift(numbers[i]);
// }

// for(let i = numbers.length-1; i>=0; i--){
//     reversed.push(numbers[i]);
// }

// for(const num of numbers){
//     reversed.unshift(num);
// }

const result = numbers.reverse()

console.log(result);