const friends = ['Rahim', 'Korim', 'Jamal', 'Nipum'];
console.log(friends);
friends.sort()
console.log(friends);

const numbers = [6, 1, 5, 9, 4, 3];
console.log(numbers);

numbers.sort();
console.log(numbers);

// Ascending 
const ages = [1, 5, 100, 15, 12, 8, 2, 28];
const sorted_ages = ages.sort(function (a, b) { return a - b})
console.log(sorted_ages)

// Decending

const sorted_ages_desc = ages.sort(function (a, b) {return b - a})
console.log(sorted_ages_desc)
