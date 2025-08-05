const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12p'
}

// for of : array
// for in : object

for(const prop in mobile){
    console.log(prop); // object key
    console.log(mobile[prop]); //object value
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
}