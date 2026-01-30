

// Time Complexity- O(n)
//Space Complexity- O(1)



const arr = [2, 1, 3, 4, 5, 7, 8]

function myFun(nums) {

    let even = 0;
    let odd = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 === 0) {
            even++
        } else {
            odd++
        }

    }
    return {'Even Nums':even,"Odd Nums":odd }

}
console.log(myFun(arr))  // {Even Nums: 3, Odd Nums: 4}