//first solution
function letterCounter1(str) {
    let letters = str.split('');
    let objKeys = new Set(letters);
    let returnObj = {};

    //adds object keys
    objKeys.forEach(element => {
        returnObj[element] = 0;
    });

    //adds values
    letters.forEach(element => {
        returnObj[element] += 1;
    })

    return returnObj;
}

//this way is better because we do it in one 'foreach' statement
function letterCounter2(str) {
    let letters = str.split('');
    let returnObj = {};

    letters.forEach(element => {
        if (!returnObj.hasOwnProperty(element)) {
            returnObj[element] = 0;
        }
        returnObj[element] += 1;
    })

    return returnObj;
}

console.log(letterCounter2('abc'));
//{ a: 1, b: 1, c: 1 }
console.log(letterCounter2('foobarbazz'));
//{ f: 1, o: 2, b: 2, a: 2, r: 1, z: 2 }

