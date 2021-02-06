function tempConvertor(obj) {
    if (Object.values(obj)[1] === 'F') {
        return {degree: (Object.values(obj)[0] - 32) * (5/9), scale: 'C'};
    } else {
        return {degree: (Object.values(obj)[0] * 9/5) + 32, scale: 'C'};
    }
}

console.log(tempConvertor({ degree: 32, scale: 'F'}));//{ degree: 0, scale: 'C' }
console.log(tempConvertor({ degree: 212, scale: 'F'}));//{ degree: 100, scale: 'C' }
console.log(tempConvertor({ degree: 0, scale: 'C'}));//{ degree: 32, scale: 'F' }
console.log(tempConvertor({ degree: 100, scale: 'C'}));//{ degree: 212, scale: 'F' }
