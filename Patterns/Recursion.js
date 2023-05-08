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
