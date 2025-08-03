let weight = 25;
let height = 2.5;
let BMI = weight  / (height)^2;

console.log("your BMI is :" +BMI.toFixed(2));

if(BMI <18.5){
    console.log('You are under weight');
}
else{
    if(BMI >= 18.5 & BMI <= 24.9){
        console.log('You are normal');
    }
    else{
        if(BMI >= 25 & BMI <= 29.9){
            console.log('You are over weight');        
        }
        else{
            console.log('You are obese');
        }
    }
    
}


