function sumOfInGivenRange(n1, n2) {
    let sum = 0;
    if (n1 && n2 <= 0) {
        return "Invalid Number";
    } else {
        for (let i = n1; i <= n2; i++) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfInGivenRange(2, 6));