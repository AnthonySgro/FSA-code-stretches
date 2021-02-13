function decorate(str, specialChar, int) {
    i = 0;
    j = 0;
    let result = "";

    while (i < int) {
        result += specialChar;
        i++;
    }

    result += str;

    while (j < int) {
        result += specialChar;
        j++;
    }

    return result;
}

console.log(decorate("Fullstack", "*", 6)); //******FullStack******
console.log(decorate("Javascript", "#", 10)); //##########Javascript##########
