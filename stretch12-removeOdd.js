function removeOdd(inputArr) {
    let counter = 0;
    for (let i = inputArr.length - 1; i >= 0; i--) {
        if (inputArr[i] % 2 !== 0) {
            counter++;
            inputArr.splice(i, 1);
        }
    }
    return counter;
}


const arr = [1, 3, 5, 8, 10, 41];

console.log(removeOdd(arr)); //4
console.log(arr); //[8, 10]
