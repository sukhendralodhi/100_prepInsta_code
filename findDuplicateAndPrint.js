// Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [2, 3]

// const nums = [1, 1, 2];

// function finDuplicate(nums) {
//     let arr = [];

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 arr.push(nums[i]);
//             }
//         }
//     }
//     return arr;

// }

// console.log(finDuplicate(nums));

const nums = [4, 3, 2, 7, 8, 2, 0, 3, 1, 0];

const findDuplicate = (nums) => {
    let seen = new Set();
    let duplicate = [];
    for (const num of nums) {
        if (seen.has(num)) {
            duplicate.push(num);
        } else {
            seen.add(num);
        }
    }
    const myArray = [...seen];
    const uniqueVal = myArray.forEach((val) => console.log(val));
    return uniqueVal;
}

console.log(findDuplicate(nums));