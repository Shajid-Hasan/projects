// let age = 5;
// let isStudent = true;
// let ticketFare = 800;

// if(age < 10){
//     console.log("Children are : Free");
// }
// if(isStudent == true){
//     discount = ticketFare * 50 / 100;
//     console.log(discount);
// }
// if(age >= 60){
//     discount = ticketFare * 15 / 100;
//     console.log(discount);
// }
// else{
//     console.log(ticketFare);
// }

let age = 52;
let isStudent = false;
let regularFare = 800;
let finalFare;

if (age < 10) {
finalFare = 0;
} else if (isStudent) {
  finalFare = regularFare * 0.5; // ৫০% ছাড়
} else if (age >= 60) {
  finalFare = regularFare * 0.85; // ১৫% ছাড়
} else {
  finalFare = regularFare; // ফুল ফেয়ার
}

console.log("Ticket Fare:", finalFare + " tk");
