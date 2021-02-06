function daysFromNow(date) {
    const rightNow = new Date(Date.now());
    return Math.round((date - rightNow) / 86400000);
}

console.log(daysFromNow(new Date('01/10/2021')));//logs days from now
