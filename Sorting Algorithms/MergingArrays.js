// Merges two already sorted arrays
function merge(arr1, arr2){
    // this will serve as the final array that is sorted
    let results = [];
    // this will hold the iteration of each array
    let i = 0;
    let j = 0;
    // while the arrays are not empty
    // the while loop will perform
    while(i < arr1.length && j < arr2.length){
        // we compare which number is smaller
        // if the current iteration/current number in array 2 is bigger
        // we take that smaller number in array 1 to be stored in the final array (result) so that it is sorted from smallest to biggest numbers
        if(arr2[j] > arr1[i]){
            // this is where we push/add the number into the results array
            results.push(arr1[i]);
            // and then we continue on to the next number in array 1
            i++;
            // if it's the opposite
        } else {
            results.push(arr2[j])
            // continue to the next number in the second array
            j++;
        }
    }
    // if the end of array 1 is hit
    while(i < arr1.length) {
        // we just want to push those numbers into the final array
        results.push(arr1[i])
        i++;
    }
    // if the end of array 2 is hit
    while(j < arr2.length) {
        // we want to push the rest of the numbers into the final array
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

                   