function sumOfDigit(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum = sum + num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

console.log(sumOfDigit(38));