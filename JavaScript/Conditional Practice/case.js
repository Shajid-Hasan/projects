const school = 'RAJ UK uttara model school';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book');
}
else{
    console.log('Fail');
}

// Remove white space (using .trim())
const drink = ' water';
const liquid = 'water '

if(drink.trim() === liquid.trim()){
    console.log('I want to drink');
}
else{
    console.log('dont drink');
}

