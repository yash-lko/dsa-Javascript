
// TC - O(n)
// SC- O(n)

const arr = [1, 2, 3, 4, 5, 6]

function reverse(nums) {
    let reversed = []
    for (let i = nums.length - 1; i >= 0; i--) {
        reversed.push(nums[i])
    }
    return reversed
}
console.log(reverse(arr))    // [6, 5, 4, 3, 2, 1]


