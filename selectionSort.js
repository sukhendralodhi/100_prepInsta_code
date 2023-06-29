function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n) {
    let i, j, min_index;

    for (i = 0; i < n - 1; i++) {
        min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        swap(arr, min_index, i);
    }
    return arr;
}

const nums = [2, 8, 1, 6, 5, 2, 3, 9];
const n = nums.length;
console.log(selectionSort(nums, n));