/** THE PROBLEM
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
 * Otherwise, return -1.
 */


// MY ANSWER: BIG O: O(log n)
function binarySearch(arr,val){
    let left = 0
    let right = arr.length -1
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        if(arr[middle] === val){
            return middle
        }else if(arr[middle] < val){
            left = middle + 1
        }else if(arr[middle] > val){
            right = middle -1
        }
    }
       return -1
}