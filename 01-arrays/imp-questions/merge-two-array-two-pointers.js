
//Merge two sorted arrays into one sorted array (using the two pointers technique
// TC= O(n+m)   SC= O(n+m)
let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6, 8]

function mergeArr(num1, num2) {

    let merged = []
    let i = 0; j = 0;

    while (i < num1.length && j < num2.length) {

        if (num1[i] < num2[j]) {
            merged.push(num1[i])
            i++
        } else {
            merged.push(num2[j])
            j++
        }

    }
    while (i < num1.length) {
        merged.push(num1[i])
        i++
    }
    while (j < num2.length) {
        merged.push(num2[j])
        j++
    }
    return merged

}
console.log(mergeArr(arr1, arr2))  // output [1,2,3,4,5,6,8] //

