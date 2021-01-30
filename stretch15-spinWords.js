function spinWords(str, num) {
    let wordArr = str.split(' ');
    let returnArr = [];
    wordArr.forEach(word => {
        if (word.length > num) {
            word = reverse(word);
        }
        returnArr.push(word);
    });

    return returnArr;
}

function reverse(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

//reverse all words with a length higher than the input
//(im pretty sure i stole this or something very close from codewars)

console.log(spinWords('stop spinning my words!', 5))
//stop gninnips my !sdrow
