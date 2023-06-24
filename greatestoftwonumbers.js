function greaterNumber(n1, n2) {
    if (n1 === n2) {
        return "Number is equal";
    } else {
        if (n1 < n2) {
            return "N2 is Big";
        } else {
            return "N1 is Big";
        }
    }
}

console.log(greaterNumber(20, 20));