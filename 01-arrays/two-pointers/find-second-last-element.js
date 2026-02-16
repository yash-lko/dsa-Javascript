
// Find second largest number from any array

const arr = [1, 2, 8, 4, 3, 5]
//inbuilt functions

//Time Complexity - O(n)
// Space Complexity - O(n)
function myFun(nums) {

    // let max = Math.max(...nums);
    // let indexOfMax = nums.indexOf(max);
    // nums.splice(indexOfMax, 1)
    // let secLargest = Math.max(...nums);
    // return secLargest      

               // Working but not safe method, because it changes the original array


    let temp=[...nums];    
    let max=Math.max(...temp);  
    let index=temp.indexOf(max)
    temp.splice(index, 1)
      return Math.max(...temp)

      //Safe 
}

console.log(myFun(arr)) //5







// Optimized without using inbuilt functions

const arr2=[1, 2, 4,3 ];

// Time complextiy- O(n)
//  Space complexity - O(1)

function myFun2(nums){
  
  let max=-Infinity;
  let secLargest=-Infinity;
  
  for(let num of nums){
    if(num>max){
      secLargest=max
      max=num
    }else if(num>secLargest && num !==max){
      secLargest=num
    }
  }
  return secLargest
}
console.log(myFun2(arr2)) // 3