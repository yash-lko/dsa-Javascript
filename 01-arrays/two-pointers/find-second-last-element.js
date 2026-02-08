
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

    console.log(temp)
   

}

console.log(myFun(arr)) //5