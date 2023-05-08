/** BASIC SWAPPING SYNTAX */


// ES5
function swap (arr, idx1, idx2){
    // hold the first number as a "temp"
    var temp = arr[idx1]
    // then that number swaps with the number next to it and becomes idx2
    arr[idx1] = arr[idx2]
    // now indx2 is the 'temp' so on and so forth
    arr[idx2 ] = temp
}