/**
 * For a given string tell me whrather it was has even number of Character or not
 * 
 */

function evenSizedString(str){
    console.log(str);
    const size = str.length;
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
    // console.log(size);
}

// evenSizedString('Dhaka');
// evenSizedString('Bangladesh');

function doubleOrTripple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number *3;
        return result;
    }
}
// console.log(doubleOrTripple(5, true));
// console.log(doubleOrTripple(5, false));

function numberOfElements (numbers){
    const len = numbers.length;
    console.log(len);
    return len;
}
// numberOfElements([12, 45, 78, 121215, 4, 5]);

function getAge (person){
    const age = person.age;
    console.log(age);
    return age;
}
getAge(40);