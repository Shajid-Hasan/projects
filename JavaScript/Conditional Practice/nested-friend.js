let myScore = 75;
let friendScore = 39;

if(myScore > 80){
    // console.log('check friend score');
    if(friendScore > 80){
        console.log("Tell your friend : Go for a lunch");
    }
    else if(friendScore >= 60){
        console.log("Tell your friend : Good luck next time");
    }
    else if(friendScore >= 40){
        console.log("Keep your friend massage unseen");
    }
    else if (friendScore < 40){
        console.log("Block your friend");
    }
}
else{
    console.log("Go to home and sleep and act sad");
}

