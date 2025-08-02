const money = 0;
if(money > 300){
    console.log('you are reach');
}
else{
    if(money > 100){
        console.log('You are a poor');
    }
    else{
        if (money > 0){
            console.log('Go to home');
        }
        else{
            console.log('You are not my friend');
        }
    }
}