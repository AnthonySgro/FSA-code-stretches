//without 'Set'
function uniqueConsonant(str) {
    const vowels = ['a','e','i','o','u'];
    let letters = str.split('');
    let myObj = {};

    letters.forEach(letter => {
        //if new letter and it isn't a vowel, add it as a property
        if (!myObj.hasOwnProperty(letter) && !vowels.includes(letter)) {
            myObj[letter] = 'bush did 9/11';
        }
    });

    //only return the array of keys
    return Object.keys(myObj);
}

function uniqueConsonant1(str) {
    const vowels = ['a','e','i','o','u'];
    let letters = str.split('');

    let consonants = letters.filter((letter) => {
        if (!vowels.includes(letter)) {
            return letter;
        }
    });

    let uniqueConsonants = new Set(consonants);
    return Array.from(uniqueConsonants);
}

console.log(uniqueConsonant('abacub'));//[ 'b', 'c' ]
