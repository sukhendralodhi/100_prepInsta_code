

const removeDuplicates = function (nums) {
    let j = 0;
    let finalArr = [];
    finalArr = [j];
    for (let i = 1; i < nums.length; i++) {

        if (nums[j] != nums[i]) {
            j++;
            console.log(nums[j]);
            nums[j] = nums[i];
            finalArr.push(nums[j]);
        }


    }
    return [j + 1, finalArr];

};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));