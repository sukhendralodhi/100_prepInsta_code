function checkNumber(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return "N1 is greatest";
    } else if (n2 >= n1 && n2 >= n3) {
        return "N2 is greatest";
    } else {
        return "N3 is greatest";
    }
}

console.log(checkNumber(300, 1000, 40));