function reverseNum(num) {
    let reverse = 0;
    while (num !== 0) {
        let r = num % 10;
        reverse = reverse * 10 + r;
        num = Math.trunc(num / 10);
    }
    return reverse;
}

console.log(reverseNum(542));