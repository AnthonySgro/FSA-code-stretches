function mostPopularLetter(str) {
    let arrLetters = str.split('')
    let letterCounter = {};

    arrLetters.forEach(letter => {
        if (!letterCounter.hasOwnProperty(letter)) {
            letterCounter[letter] = 1;
        } else {
            letterCounter[letter]++;
        }
    })

    let maxLetter = [];
    let maxValue = 0;
    for (const [key, value] of Object.entries(letterCounter)) {
        if (value > maxValue) {
            maxLetter = [];
            maxLetter.push(key);
            maxValue = value;
        } else if (value === maxValue) {
            maxLetter.push(key);
        }
    }

    if (maxLetter.length === 0) {
        return undefined;
    } else {
        return maxLetter;
    }
}

console.log(mostPopularLetter('foo'));//o
console.log(mostPopularLetter('foobarbazbzz'));//[b,z]
console.log(mostPopularLetter(''));//undefined
