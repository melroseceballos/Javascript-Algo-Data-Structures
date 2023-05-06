/******* PROBLEM
 * You are given two sets of arrays
 * You have to make sure that the second array is the value of whenever the first array is squared
 * For example: [1,2,3,4] [1,4,8,16] = true
 *              [1,2,3,4 [1,5,6,16] = false
 * it's important to note that the second array does not have to be in order
 * as long as it contains the squared value from a number in the first array
 * and also has the same length as the first array
 */

















/**** NAIVE SOLUTION */
// the function takes 2 arrays [arr1] [arr2]
function same(arr1, arr2){
    // it checks if the length of both array are the same, if not, it returns false
    // if true to it sends over to the nested for loop
    if(arr1.length !== arr2.length){
        return false;
    }
    // it iterates through the numbers in first array
    for(let i = 0; i < arr1.length; i++){
        // it checks array2's index if there is a number from array1 that is squared inside of it
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
             // if there is no corresponding number in array2 ... then it returns false
        if(correctIndex === -1) {
            return false;
        }
        // if there is a corresponding number in array2
        console.log(arr2);
        // it is then spliced/removed from the array2 
        // and then the function keeps on repeating until all numbers are checked
        // if everything is good to go (there are corresponding numbers in arr2 for arr1) then it returns true
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
