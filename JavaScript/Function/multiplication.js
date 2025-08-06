// Multiplication Using By Function

function rent(fish, grocary){
    totalCost = fish * grocary;
    console.log("This is my every month cost = " + totalCost);
    return totalCost;
}
const monthlyCost = rent(500, 1200);
console.log(monthlyCost);