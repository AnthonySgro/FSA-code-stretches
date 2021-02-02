function counter(start, increment) {
    value = start;
    let isFirst = true;
    return () => {
        if (isFirst) {
            isFirst = false;
            return value;
        } else {
            return value += increment;
        }
    }
}

const c1 = counter(1, 2);
console.log(c1());//1
console.log(c1());//3
console.log(c1());//5
const c2 = counter(10, 20);
console.log(c2());//10
console.log(c2());//30
console.log(c2());//50
