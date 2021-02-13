function union() {
    let values = Object.values(arguments);
    let flattenedArr = [];
    values.forEach(value => {
        for (let i = 0; i < value.length; i++) {
            flattenedArr.push(value[i]);
        }
    });

    return Array.from(new Set(flattenedArr));
}

console.log(union([1, 2], [3, 4], [5, 6]));//[1, 2, 3, 4, 5, 6]
console.log(union([1, 2], [1, 2, 3, 3], [5, 6, 1]));//[1, 2, 3, 5, 6]
console.log(union([], [], [], [], [], [], [2]));//[2]
