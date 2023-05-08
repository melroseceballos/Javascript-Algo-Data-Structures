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
 
                   
                                    
                                 