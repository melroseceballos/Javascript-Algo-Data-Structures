/** THE PROBLEM
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
 * Otherwise, return -1.
 */


// MY ANSWER: BIG O: O(log n)
function binarySearch(arr,val){
    // initializes pointer to the left/beginning of array
    let left = 0
    // initializes pointer to the right/end of the array
    let right = arr.length -1
    
    // the left is less than right
    // which means if there are still numbers inside the array
    while(left <= right){
        // initializing the middle to be the average of right and left
        // important to use math.floor to avoid decimals and only get whole numbers
        let middle = Math.floor((left + right) / 2)
        // if the target value is the same as the middle then return the index of middle
        if(arr[middle] === val){
            return middle
        // if middle is lesser than the target value
        // movie left/start up so that it only searches throught the half
        // that has bigger numbers
        }else if(arr[middle] < val){
            left = middle + 1
            // if middle is greater than the target value
            // move right/end so that it ends at the smaller number half
        }else if(arr[middle] > val){
            right = middle -1
        }
    }
    // if target value is not found .. -1 is returned
       return -1
}