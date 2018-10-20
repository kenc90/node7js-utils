/***
 * min and max (both included)
 */
function int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function text(numberOfCharacters, characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890~!@#$%^&*()_+-=:;<,>./?|'){
    let result = "";
    for(let i = 0; i < numberOfCharacters; i++){
        result += characters.charAt(int(0, characters.length - 1));
    }
    return result;    
}


function alphanumeric(numberOfCharacters){
    return text(numberOfCharacters, 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890');
}



module.exports = {
    int: int,
    text: text,
    alphanumeric: alphanumeric,
}