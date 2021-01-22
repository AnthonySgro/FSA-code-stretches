//TODO
function sumValues(obj) {
    let sum = 0;
    
    for (prop in obj) {
        console.log(obj[prop]);
        if (typeof obj[prop] === 'number') {
            sum += obj[prop];
        }
        else if (typeof obj[prop] === 'object') {
            sum += sumValues(obj[prop]);
        }
    }
  return sum;
}

console.log(sumValues({ foo: 1, bar: 1, anthony: 1, bazz: [{jazz: [{why: 100}], bye: 1}]}));