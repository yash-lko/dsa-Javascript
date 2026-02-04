
//Count occurrences of a given number

// Time Complexity- O(n)
// Space Complexity- O(1)

const arr = [1, 2, 3, 2, 2, 4, 5]
const x = 2

function myFun(nums, target) {
    let occurrences = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            occurrences++
        }
    }
    return occurrences;

}

console.log(myFun(arr, x))   //  3