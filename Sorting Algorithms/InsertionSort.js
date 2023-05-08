function insertionSort(arr)    {
    // iterates over the array
    for(let i=1; i<arr.length; i++){
        // creating a variable
        // to hold the current iteration of i
        let track = arr[i]
        // creating another for loop that does the sorting
        //The next for loop starts from the index just before the current element (j = i - 1) 
        // and iterates backwards through the array until it reaches the beginning of the array (j >= 0). 
      
    for(let j = i-1; j >= 0 && arr[j] > track; j--)   {
         //It compares each element with the track variable and moves the elements that are greater than track one position to the right.
        arr[j + 1] = arr[j]
      
    }
     //When it finds an element that is less than or equal to track, the loop stops and the current element is inserted into the array at the position j + 1.
    arr[j + 1] = track
    }
    return arr
}


insertionSort([2,1,9,55,4])