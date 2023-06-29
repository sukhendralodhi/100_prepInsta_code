const nums = [2, 6, 11, 15];
const target = 9;

function twoSum(nums, target) {
    let res = [];
    if (nums.length < 2) return false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                res.push(nums[j]);
                res.push(nums[i]);
            }
        }
    }
    return res;
}

console.log(twoSum(nums, target));