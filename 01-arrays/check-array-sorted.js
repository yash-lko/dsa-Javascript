
// Time Complexity= O(n)
// Space Complexity= 



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]  //ascending
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1] //descending

function myfun(nums) {


    console.log(nums.length)

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] > nums[i + 1]) {
            return false
        }
    }

    return true
}
console.log(myfun(arr))   // true
