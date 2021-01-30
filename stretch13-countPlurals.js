function countPlurals(str) {
    const wordArr = str.split(' ');
    let plurals = 0;
    wordArr.forEach(word => {
        if (word[word.length - 1] === 's') {
            plurals++;
        }
    })

    return plurals;
}


const words = 'foos bar bazzes quq fizzes buzz';
//assume a plural word ends with an s

console.log(countPlurals(words));
console.log(countPlurals('x y z'));
/*
3
0
*/
