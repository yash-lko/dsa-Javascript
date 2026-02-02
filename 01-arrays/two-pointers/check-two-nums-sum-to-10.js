
//Given an array of numbers and a target value, check whether any two numbers add up to the target.

//  Only for sorted array

//Two Pointers solution

//Time Complexity - O(n)
//Space Complexity - O(1)

const arr = [1, 3, 4, 5, 7];
const target = 10;
function myFun(nums, tar) {

    let slow = 0;
    let fast = nums.length - 1;
    while (slow < fast) {

        let sum = nums[slow] + nums[fast];

        if (sum === tar) {
            return true;
        } else if (sum > tar) {
            fast--
        } else {
            slow++
        }

    }
    return false;
}
console.log(myFun(arr, target))     //true


// Time Complexity - O(n²)
// Space Complexity- O(1)

//Brute force solution


// function myFun(nums, tar) {

//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {

//             if (nums[i] + nums[j] === tar) {

//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(myFun(arr, target))   // true





