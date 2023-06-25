function isArmstrong(num) {
    let temp = num;
    let newNum = 0;
    while (num !== 0) {
        let r = num % 10;
        newNum = newNum + (r * r * r);
        num = Math.floor(num / 10);
    }
    if (temp === newNum) {
        return "Armstrong";
    } else {
        return "Not Armstrong";
    }
}

console.log(isArmstrong(370));