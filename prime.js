function primeNumber(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count += 1;
        }
    }
    if (num === 0 || num === 1) {
        return "Not Prime";
    } else if (count > 2) {
        return "Not Prime";
    } else {
        return "Prime Number";
    }
}

console.log(primeNumber(4));