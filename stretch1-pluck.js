//write the PLUCK method
//takes an array and a property, and returns the value of that property for each of the items.
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {food: 'pizza'}, {name: 'curly', age: 60}];

const pluck2 = (arr,value) => {
    let answerArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(value)) {
            answerArr.push(arr[i][value]);
        }
    }

    console.log(answerArr);
    return answerArr;
}

const pluck = (arr,value) => {
    let answerArr = arr.reduce((acc,cur) => {
        if (cur.hasOwnProperty(value)) {
            acc.push(cur[value]);
        }
        
        return acc;
    }, []);

    console.log(answerArr);
    return answerArr;
}

pluck(stooges, 'name');//[ 'moe', 'larry', 'curly' ]