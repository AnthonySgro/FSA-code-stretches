function containsDuplicates(arr) {
    let duplicate = false;
    arr.forEach((element,index) => {
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i] && index !== i) {
                duplicate = true;
            }
        }
    });

    return duplicate;
}


console.log(containsDuplicates([1, 2])); // false
console.log(containsDuplicates([1,2, 1])); // true
console.log(containsDuplicates(["a"])); // false
console.log(containsDuplicates(["a", "a"])); // true
console.log(containsDuplicates([true])); // false
console.log(containsDuplicates([true, true])); // true
