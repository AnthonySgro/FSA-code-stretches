//create class Promise() ... jk
//create tabConverter()

//STARTS OUT WITH
const NOTES = ["e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#"];

function tabConverter(tab) {
    let openStrings = [0, 5, 10, 3, 7, 0];
    return openStrings.map((note, i) => {
        note += tab[i];
        if (note > 11) {
            note %= 12;
        }
        return NOTES[note];
    });
}

// guitar tabs are represented as such (LOWEST STRING TO HIGHEST STRING):
console.log(tabConverter([0, 0, 0, 0, 0, 0])); // logs [e, a, d, g, b, e]
console.log(tabConverter([3, 2, 0, 0, 0, 2])); // logs [g, b, d, g, b, f#]
console.log(tabConverter([23, 14, 10, 8, 0, 24])); // logs [d#, b, c, d#, b, e]
