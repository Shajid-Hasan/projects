const friends = ['balam', 'kalam','salam', 'gelam', 'pailam'];
console.log(friends.includes('gelam'));
console.log(friends.includes('pailam'));
console.log(Array.isArray(friends));

if(friends.includes('khailam')){
    console.log('party');
}
else{
    console.log('not food we are fasting');
}