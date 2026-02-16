const arr=[1, 2, 4,3 ];

// Rotate array by 1 (left)

function myFun(nums){
  
  let temp=nums[0]
  
  for(let i=1; i<nums.length; i++){
    
    nums[i-1]=nums[i]
    
  }
nums[nums.length-1]=temp;

return nums
  
}
console.log(myFun(arr)) // [2,4,3,1]




// Rotate array by 1 (Right)
// function myFun(nums){
  
//   let temp= nums[nums.length-1]
//   console.log(temp, "temp")
  
//   for(let i=nums.length-1; i<=0; i--){
     
//     nums[i+1]=nums[i] //1:1, 2:2, 3:4, 
//   }
//    nums[0]=temp
   
//   return nums;

  
// }
// console.log(myFun(arr)) // [3,1,2,4]

