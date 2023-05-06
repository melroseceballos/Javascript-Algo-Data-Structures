/******* PROBLEM
 * You are given two sets of arrays
 * You have to make sure that the second array is the value of whenever the first array is squared
 * For example: [1,2,3,4] [1,4,8,16] = true
 *              [1,2,3,4 [1,5,6,16] = false
 * it's important to note that the second array does not have to be in order
 * as long as it contains the squared value from a number in the first array
 * and also has the same length as the first array
 */


/**** BEST CASE SOLUTION O(n) */
// first, the solution checks if the length of both arrays are the same
// if it is, it sends it to their respective for loops
// if not, the solution sends false - end of solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    // these variables are initialized because the end output of solution would be an object
    // and also to store the iterated numbers in the array inside an object
    // because objects are faster to access (linear)
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // in here it checks if there is a in the frequency counter object
    // if there is - it adds 1 to the value 
    // if not it creates another key
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    // checks if there is a squared value in array1
    // if there is none then the solution returns false
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        // if it returns true, then it checks how many times those numbers are in the array2
        // if is the same number of times in array1 then it returns true
        // if not the same it returns false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])







/**** WORST CASE SOLUTION 0(n) ^ 2 */
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
