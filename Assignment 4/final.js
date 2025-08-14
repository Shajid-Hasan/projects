function totalFine( fare ) {
        if(typeof fare !== 'number' || fare <= 0){
            return "Invalid";
        }
        
        let totalFine = fare + fare * (20 / 100) + 30;
        return totalFine;
}

function  onlyCharacter( str ) {

    if(typeof str !== 'string' || str == true || str == []){
        return "Invalid";
    }

    let text = str;
    let result = text.toUpperCase().replace(/\s+/g, '');
    return result;
}

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