function duplicate(nums) {
    let j = 0;
    const res = [];
    // const find = [];
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i];
            res.push(nums[j]);
        }

    }
    return res;
}

const nums = [
    1, 2, 2, 3,
    5, 6, 8, 9, 9, 9, 9, 9
];
console.log(duplicate(nums));