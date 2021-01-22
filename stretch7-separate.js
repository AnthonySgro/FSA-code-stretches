function separate(arr) {
    let returnObj = {
        arrays: [],
        other: []
    };

    arr.forEach(element => {
        if (Array.isArray(element)) {
            returnObj.arrays.push(element);
        } else {
            returnObj.other.push(element);
        }
    });

    return returnObj;
}

console.log(separate([{},1, [1, 2], ['a'], {}]));
//{ arrays: [ [ 1, 2 ], [ 'a' ] ], other: [ {}, 1, {} ] }