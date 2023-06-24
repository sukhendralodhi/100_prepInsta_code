function sumOfNaturalNumber(num) {
    let sum = 0;
    if (num <= 0) {
        return "Invalid number";
    } else {
        for (let i = 0; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(sumOfNaturalNumber(2));