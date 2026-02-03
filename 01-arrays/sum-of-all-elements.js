
//Calculate sum of all elements 


// Time Complexity - O(n)
// Space Complexity - O(1)


const arr = [1, 2, 3, 7, 5, 6]

function myFun(nums) {


    let sum = 0;

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i]

    }
    return sum;

}
console.log(myFun(arr))   //24