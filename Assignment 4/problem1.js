function totalFine( fare ) {
        if(typeof fare !== 'number' || fare <= 0){
            return "Invalid";
        }
        
        let totalFine = fare + fare * (20 / 100) + 30;
        return totalFine;
}

let giveFine = totalFine(552);
console.log(giveFine);
