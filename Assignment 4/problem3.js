function  bestTeam( player1, player2 ) {

    if(typeof player1 !== 'object' || typeof player2 !== 'object'){
        return "Invalid";
    }

    let score = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if(score < score2){
        return player1.name;
    }
    else if(score2 < score){
        return player2.name;
    }
    else{
        return "Tie";
    }
    
}

let player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
let player2 = "France";
let player = bestTeam(player1, player2);
console.log(player);