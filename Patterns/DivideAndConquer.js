/***** PROBLEM
 * Given a sorted array, write a function called search that accepts a value and returns the index where the value is located,
 * if the value is non-existent in the array .. return -1
 */

// BEST Case: Log(n) Binary Search

function search (arr,val)   {
    let min = 0
    let max = arr.length -1;

    // while min is lesser than the last number of the array
    while (min <= max)  {
        // this is the middle of the array ... it's min and max added divided by 2
        let middle = Math.floor((min + max) / 2 );
        let currentElement = arr[middle]
        // if the middle is smaller than the value needed to be located
        // it continutes to search up of the array
        if(arr[middle] < val){
            min = middle + 1;
            // if the middle is larger than the value
            // it search down or lower of the array
        }else if (arr[middle] > val) {
            max = middle -1 
        }else {
            return middle
        }
    }
    return -1
} 