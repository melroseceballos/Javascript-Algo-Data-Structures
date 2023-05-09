// BIG O: Time Complexity: O(nk)
    //    Space Complexity: O(n + k)



// this function get the rightmost number of the value
// this is so that it can start sorting from here
  function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// this function finds out how many times to run the function
// by finding out how many digits are in the numbers
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  // official radix sort:
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }
  
  radixSort([23,345,5467,12,2345,9852])
  
  
  
  
  
  
  
  