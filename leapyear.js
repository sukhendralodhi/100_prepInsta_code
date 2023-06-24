function leapYear(year) {
    if (year % 400 === 0) {
        return "Leap Year";
    } else if ((year % 4 === 0) && (year % 100 != 0)) {
        return "Leap Year";
    } else {
        return "Not Leap Year";
    }
}

console.log(leapYear(2000));