function  resultReport( marks ) {

    if(marks.length === 0){
        return { finalScore: 0 , pass: 0, fail: 0 };
    }

    if(marks  !== 'array'){
    return "Invalid";
    }
    
    for(let mark of marks){
        avg = (mark / mark.length) * mark.length;
        if(mark <= 30){
            return "fail";
        }
        else{
            return "pass";
        }
    }
}

let studentMark = resultReport([99, 87, 67, 12 ,87]);
console.log(studentMark);
