function isPrime(num) {
    let count = 0;
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }

    }
    return true;
}

let n1 = 1;
let n2 = 100;

for (let i = n1; i < n2; i++) {
    if (isPrime(i))
        console.log(i);
}