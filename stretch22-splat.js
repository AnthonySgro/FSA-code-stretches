function splatter() {
    let newObj = {};
    [...arguments].forEach(obj => {
        for (let prop in obj) {
            if (!newObj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
            }
        }
    })
    return newObj;
}


const x = { a: 1 };
const y = { b: 2 };
const z = { c: 3, d: 4 };
const splat = splatter(x, y, z);//returns new object with all keys of x and y and z
console.log(splat);
console.log(x);//x will be unchanged
console.log(y);//y will be unchanged
console.log(z);//z will be unchanged
/*
{ a: 1, b: 2, c: 3, d: 4 }
{ a: 1 }
{ b: 2 }
{ c: 3, d: 4 }
*/
