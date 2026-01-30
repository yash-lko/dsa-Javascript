
// Time Complexity- O(n)
//Space Complexity - O(1) Only constant variables

const arr = [1, 2, 3, 6, 4, 1]

function maxfun(nums) {

    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return max
}

console.log(maxfun(arr))   // 6

