const age = 48;
const price = 500;
if(age < 17){
    console.log('You can eat for free');
}
else if (age >= 80){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 50){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log('Pay full amount');
}