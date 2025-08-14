function  onlyCharacter( str ) {

    if(typeof str !== 'string' || str == true || str == []){
        return "Invalid";
    }

    let text = str;
    let result = text.toUpperCase().replace(/\s+/g, '');
    return result;
}

let inputValue = onlyCharacter("Cy   bar- At  tac k  ");
console.log(inputValue);