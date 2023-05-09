// Merge function from merging arrays
// BIG O: Time Complexity: O(n log n)
        //Space Complexity: O(n)
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    // checks if the array contains elements in the array. Basically if it is not empty
    if(arr.length <= 1) return arr;
    // located the middle of the array 
    // and then passes that index/number into the middle variable
    let mid = Math.floor(arr.length/2);
    // splits up the left side of the aray from the right side of the array
    // so now there's two arrays instead of one
    let left = mergeSort(arr.slice(0,mid));
    // splits up the right side of the array from the left side
    // we start from mid because if we start at 0 == that is left zone
    // so we start from the middle
    let right = mergeSort(arr.slice(mid));
    // after everything is sorted -- we merged them back together 
    // now they are sorted!
    return merge(left, right);
}

mergeSort([10,24,76,73])