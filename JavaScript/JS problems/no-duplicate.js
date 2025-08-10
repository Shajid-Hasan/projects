/**
 * array has some duplicate element
 * []
 */





const birianiLover = ['Rahim', 'karim', 'batul', 'tomin', 'amin', 'amin', 'batul'];
const numbers = [1, 5, 7, 8, 10, 54, 13, 19, 21];

function noDuplicate (array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false)
            unique.push(item);
    }
    return unique;
}

const uniqueArray = noDuplicate(birianiLover);
console.log(uniqueArray);
