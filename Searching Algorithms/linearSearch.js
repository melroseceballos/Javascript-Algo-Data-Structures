/*** THE PROBLEM
 * write a function that accepts an arr and a value
 * loop through the array and check if the current element
 * is equal to the value
 * if true, return index of element
 * if false, return -1
 */

//MY ANSWER:
function linearSearch(arr, val)	{
    for(let i=0; i<arr.length; i++){
    let arrV= arr[i]
    if(arrV === val){
    return arr.indexOf(val)
    }
    }
    return -1
    }
    
    console.log(linearSearch([1,2,3,4,5,6], 6))