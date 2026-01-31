// Time Complexity- O(n)
//Space Complexity- O(n)

const arr = [1, 0, 3, 0, 4, 5, 6, 0]

function myFun(nums) {
    let nonzeros = []
    let zeros = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nonzeros.push(nums[i])
        } else {
            zeros.push(nums[i])
        }
    }

    return [...nonzeros, ...zeros]
}
console.log(myFun(arr))   // [1, 3, 4, 5, 6, 0, 0, 0]





// Little Optimal way

// function myFun(nums) {
//     let nonzeros = []
//     let zeros = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nonzeros.push(nums[i])
//         } else {
//             zeros++
//         }
//     }

//     while(zeros--) {
//         nonzeros.push(0)
//     }
//     return nonzeros;
// }


   //console.log(myFun(arr))  // [1, 3, 4, 5, 6, 0, 0, 0]
