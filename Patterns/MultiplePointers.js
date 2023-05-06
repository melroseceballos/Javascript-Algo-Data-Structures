/*** PROBLEM 
 * write a function that accepts a sorted array of integers
 * the function should the first pair that when added to together equals zero
 * if the a pair is found, it should return an array containing the pair
 * if pair does not exist, it should return undefined
*/



// BEST CASE SOLUTION: Time Complexity O(n) Space Complexity O(1)
function sumZero(arr) {
    let left = 0
    let right = 0
    while (left <right ){
        let sum  = arr[left] + arr[right]
        if (sum === 0){
            return arr[left], arr[right]
        }else if (sum > 0){
            right --
        }else {
            left++
        }
    }
}