function counter(num) {
    let start = num;
    return () => {
        return start++;
    }
}

const countFrom1 = counter(1);
console.log(countFrom1());//1
console.log(countFrom1());//2
console.log(countFrom1());//3
const countFrom100 = counter(100);
console.log(countFrom100());//100
console.log(countFrom100());//101
