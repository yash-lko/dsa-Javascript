

//Time Complexity- O(n)
//Space Complexity- O(1)


const arr = [0, 0, 1, 1, 1, 2, 3, 3];

function myFun(nums) {
    let unique = []

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i + 1]) {

        } else {
            unique.push(nums[i])
        }
    }
    return unique.length


}

console.log(myFun(arr))     // 4
