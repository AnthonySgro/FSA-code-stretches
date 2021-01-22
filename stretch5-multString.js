function multString(str) {
    let numbers = str.split(', ')
    let product = numbers.reduce((arr, cur) => {
        arr *= cur;
        return arr;
    }, 1);

    return product;
}

console.log(multString('2, 5, 3'));//30
console.log(multString('2, 2, 2'));//8