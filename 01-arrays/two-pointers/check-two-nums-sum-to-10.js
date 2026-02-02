
//Given an array of numbers and a target value, check whether any two numbers add up to the target.


//Two Pointers solution

// function myFun(){

// }
















// Time Complexity - O(n²)
// Space Complexity- O(1)

//Brute force solution
const arr = [1, 3, 4, 5, 7];
const target = 10;

function myFun(nums, tar) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === tar) {

                return true
            }
        }
    }
    return false
}
console.log(myFun(arr, target))   // true





