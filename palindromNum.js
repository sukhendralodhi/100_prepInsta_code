function isPalindrome(num) {
    let temp = num;
    let newNum = 0;
    while (num !== 0) {
        let r = num % 10;
        newNum = newNum * 10 + r;
        num = Math.floor(num / 10);
    }
    if (newNum === temp) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

console.log(isPalindrome(122));