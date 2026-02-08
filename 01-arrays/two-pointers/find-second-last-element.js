
// Find second largest number from any array

const arr = [1, 2, 8, 4, 3, 5]



//inbuilt functions

//Time Complexity - O(n)
// Space Complexity - O(n)
function myFun(nums) {

    let max = Math.max(...nums);
    let indexOfMax = nums.indexOf(max);
    nums.splice(indexOfMax, 1)
    let secLargest = Math.max(...nums);
    return secLargest


}

console.log(myFun(arr)) //5