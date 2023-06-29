const binarySearch = (nums) => {
    if (nums.length < 0) return;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            return i;
        }
    }
    return -1;
}

const nums = [2, 4, 5, 6, 9, 8];
const k = 80;
console.log(binarySearch(nums));