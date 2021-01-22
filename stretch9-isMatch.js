function isMatch(src, target) {
    const entries = Object.entries(target);

    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i];
        if (src[key] !== value) {
            return false;
        }
    }

    return true;
}

console.log(isMatch({}, {x: 1}));//false
console.log(isMatch({x: 1, y: 2}, {x: 1}));//true
console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 2}));//true
console.log(isMatch({x: 1, y: 2, z: 3}, {x: 1, y: 1}));//false