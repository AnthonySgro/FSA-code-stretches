//returns random integer: [0,max)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomList(arr, count) {
    let returnArr = [];

    for (let i = 0; i < count; i++) {
        //random index
        let randIndex = getRandomInt(arr.length)
        returnArr.push(arr[randIndex]);
        arr.splice(randIndex,1);
    }

    return returnArr;
}

console.log(randomList([1, 2, 3], 2));//[1, 2] or [2, 1] or [1, 3] etc.
console.log(randomList(['foo', 'bar', 'bazz', 'quq'], 2));//a random choice of 2 out of 4, with no repeats