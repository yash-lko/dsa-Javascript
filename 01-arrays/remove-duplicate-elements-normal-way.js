
// Time Complexity - O(n²)
// Space Comlexity-  O(n)

const arr = [2, 1, 2, 3, 1, 5, 0, 6, 1]

// function myFun(nums){

//     let unique=[]

//   for(let i=0; i<nums.length;i++){
//     if(!unique.includes(nums[i])){
//           unique.push(nums[i])
//     }
//   }
// return unique

// }
// console.log(myFun(arr))   // [2,1,3,5,0,6]


// Little Optimal


// arr= [2,3,3,5,6]

function myFun(nums) {

  let unique = []
 
  for (let i = 0; i < nums.length; i++) {
     let dub = false;
      //2
    for (let j = 0; j < unique.length; j++) {

      console.log(nums[i], unique[j] )
      if (nums[i] === unique[j]) {
        dub = true;
        break;
      }
    }
    if (!dub) {
      unique.push(nums[i])
    }
  }
  return unique
}
console.log(myFun(arr))