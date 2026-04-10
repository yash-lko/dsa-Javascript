

//Product of Array Except Self
const arr = [1, 2, 3, 4, 5]

function myFun(nums) {

    let result = []

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j]
            }

        }
        result.push(product)
    }
    return result
}
console.log(myFun(arr)) //  [120, 60, 40, 30, 24]