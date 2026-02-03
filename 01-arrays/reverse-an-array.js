
// Space Complexity- O(n)
// Time Complexity-O(n)

const arr = [1, 2, 3, 4, 5, 6]

// function myFun(nums){

//     let reversed=[]

//     for(let i=nums.length-1; i>=0; i--){
//         reversed.push(nums[i])
//     }
//    return reversed
// }
// console.log(myFun(arr))  //    [6,5,4,3,2,1]






// Time Complexity- O(n)
// Space Complexity- O(1)



//Optimal Solution  

//Two Pointers.




function myFun(nums) {

    let left = 0;                 // starting index
    let right = nums.length - 1;  // ending index

    while (left < right) {        // loop until pointers meet/cross

        let temp = nums[left];    // store left value temporarily
        nums[left] = nums[right]; // move right value to left position
        nums[right] = temp;       // move stored left value to right position

        right--;                  // move right pointer one step left
        left++;                   // move left pointer one step right
    }

    return nums;
}
console.log(myFun(arr)); // [6, 5, 4, 3, 2, 1]