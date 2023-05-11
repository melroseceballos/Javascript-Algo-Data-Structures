// My solution
function prices(arr){
    let left = 0
    let right = 0
    let tempProfit = 0
    let maxProfit = 0
    // check if the array has numbers inside of it
    // or if it has enough number to get max profit
    if(arr.length === 0 ) return 0

    // loop through the array
    for(let i=0; i<arr.length; i++){
        left = arr[i]
        right = arr[i + 1]
        if(right < arr.length){
            tempProfit = right - left
            maxProfit = Math.max(maxProfit, tempProfit)
        }
    }
    return maxProfit + 1
}

console.log(prices ([7,1,5,3,6,4]))


// other solutions
function prices(arr) {
    if (arr.length === 0) return 0;
  
    let minPrice = arr[0];
    let maxProfit = 0;
  
    for (let i = 1; i < arr.length; i++) {
      // Calculate the potential profit if selling on this day
      const potentialProfit = arr[i] - minPrice;
  
      // Update the minimum price if a lower price is found
      minPrice = Math.min(minPrice, arr[i]);
  
      // Update the maximum profit if a higher profit is found
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  
    return maxProfit;
  }
  
  console.log(prices([7, 1, 5, 3, 6, 4]));
  