function checkNumber(num) {
    if (num < 0) {
        return 'Number is negative';
    } else if (num === 0) {
        return "Zero";
    } else {
        return 'Number is positive';
    }
}

console.log(checkNumber(0));