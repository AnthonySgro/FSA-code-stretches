function intersect(arr1, arr2) {
    let returnArr = [];

    arr1.forEach(num => {
        if (arr2.includes(num)) {
            returnArr.push(num);
        }
    });

    arr2.forEach(num => {
        if (arr1.includes(num) && !returnArr.includes(num)) {
            returnArr.push(num);
        }
    })

    return returnArr;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4]

console.log(intersect(arr1, arr2));//[2, 3]
console.log(arr1);//[1, 2, 3]
console.log(arr2);//[2, 3, 4]

console.log(intersect([], []));//[]
console.log(intersect(['foo', 'bar', 'bazz'], ['bazz', 'quq']));//['bazz']