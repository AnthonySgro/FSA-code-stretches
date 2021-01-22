function fill(length, value) {
    let returnArr = [];

    //if object, create hard copies in memory
    if (typeof value === 'object') {
        for (let i = 0; i < length; i++) {
            let newMemoryRef = Object.assign({}, value);    
            returnArr.push(newMemoryRef);
        }

    //otherwise, just push value
    } else {
        for (let i = 0; i < length; i++) {
            returnArr.push(value);
        }
    }

    return returnArr;
}

const a1 = fill(3, true);
console.log(a1);//[true, true, true];
const a2 = fill(4, 42);
console.log(a2);//[42, 42, 42, 42];

const x = {foo: 'bar'};
const a3 = fill(2, x);
console.log(a3);//[ { foo: 'bar' }, { foo: 'bar' } ]
console.log(a3[0] === a3[1]);//false