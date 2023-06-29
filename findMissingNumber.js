var missingNumber = function (nums) {
    const l = nums.length; //length of arr
    const sum1 = l * (l + 1) / 2; // calcula
    const sum2 = nums.reduce((total, curr) => total + curr, 0);
    let res = sum1 - sum2;
    return res;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));