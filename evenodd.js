function checkNumber(num) {
    if (num <= 0) {
        return "Invalid number!";
    } else {
        if (num % 2 === 0) {
            return "Number is even";
        } else {
            return "Number is odd";
        }
    }
}

console.log(checkNumber(5));