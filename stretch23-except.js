function except2(initArr, filterArr) {
    let newArr = [];
    for (let i = 0; i < initArr.length; i++) {
        if (!Object.values(filterArr).includes(initArr[i])) {
            newArr.push(initArr[i]);
        }
    }
    return newArr;
}

function except(initArr, filterArr) {
    return initArr.filter(value => {
        return !Object.values(filterArr).includes(value);
    });
}

console.log(except2([1, 2, 3], [2, 4]));//[1, 3]
console.log(except2([1, 2, 3], [1, 2, 3]));//[]
console.log(except2([1, 2, 3], [4, 5, 6]));//[1, 2, 3]