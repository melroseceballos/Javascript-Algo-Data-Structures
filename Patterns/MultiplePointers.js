/*** PROBLEM 
 * write a function that accepts a sorted array of integers
 * the function should the first pair that when added to together equals zero
 * if the a pair is found, it should return an array containing the pair
 * if pair does not exist, it should return undefined
*/



// BEST CASE SOLUTION: Time Complexity O(n) Space Complexity O(1)
function sumZero(arr) {
    let left = 0
    let right = arr.length -1
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

// WORST CAS: Time Complexity O(n) ^ 2 Quadratic
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


/* Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.


sumZero([-4,-3,-2,-1,0,1,2,5])
**/
// I had no answer for this one.. this instructure answer:
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])