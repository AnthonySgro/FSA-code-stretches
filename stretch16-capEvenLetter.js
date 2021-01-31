function capEvenLetter(str) {
let returnWord = '';

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            returnWord += str[i].toUpperCase();
        } else {
            returnWord += str[i];
        }
    }
    return returnWord;
}

const str='hello i am good'
console.log(capEvenLetter(str));
//HeLlO I Am gOoD