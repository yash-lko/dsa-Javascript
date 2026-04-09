
//Indices of the sum of two nums
//Find indices of two numbers that add up to target

function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; 
      }
    }
  }
}

let arr = [3, 8, 4, 6, 5];
let target = 10;

console.log(twoSumBruteForce(arr, target)); // Output: [2, 3]