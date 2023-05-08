// Sample recursive 

function countDown(num){
    // checks if num is less than or equal to 0
    if(num <= 0) {
        // if it is it will console.log "All done!"
        console.log("All done!");
        return;
    }
    // if not, it console logs the current num
    console.log(num);
    // and then subtracts 1 from it everytime the function runs
    num--;
    // here the function is called inside itself so that
    // the function continues to loop
    // until num becomes less or equal to 0
    countDown(num);
}
countDown(3)

// example 2
function sumRange(num){
    // if num is equal to 1 -- it returns 1
    if(num === 1) return 1; 
    // if not equal to 1
    // it returns the current number
    // calls the function again and this time takes the current num
    // and subtracts 1
    // if num was 2
    // the return num would be like this
    // 2 + sumRange(2-1) = 1
    // so then return num is now 3
    // but the base case is met because the end total of sumRange
    // is now 1
    return num + sumRange(num-1);
 }
 
 sumRange(4)
 
                   
// example 3:
function collectOddValues(arr){
    // It first initializes an empty array called result, where it will store the odd numbers.
    let result = [];
    // It then defines another function called helper, which takes an array as its input and checks if the first element of the array is odd or even.
    function helper(helperInput){
        // Finally, the helper function is called with the input array arr, and the result array is returned as the final output.
        if(helperInput.length === 0) {
            return;
        }
        // If the first element is odd, it adds it to the result array using the push method.
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        // It then calls itself recursively, passing the remaining elements of the input array as a new array argument using the slice method, which creates a new array with all elements except the first one.
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])                                 
                                 