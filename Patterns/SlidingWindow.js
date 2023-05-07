/***** PROBLEM
 * write a function that accepts an array of integers and a number called n. The function should calculate the maximum sum of n.
 * basically what the function is asking for is that the you're going to be given an array
 * and then there will be a number that tells you how many numbers you can access in order to get the maximum sum
 * so basically: ([1,2,3,4,5,6,7], 2) <----- so the 2 in there is telling you -- you can use two numbers in the array in order to give biggest sum 
 * obviously it would be 6 & 7 = 13
 * so what the sliding window does is that it checks 1&2 and sets the temporary maximum number to 3
 * and then it checks 2 & 3 .. is it bigger than the maximum sum than previously? if yes, then it replaces the temporary max number
 * and so on so forth
 * now.. the window can change in size depending on the subset you were given.. in the example we have 2. 
 * that can change to any number like 4 ... now you have to then find the largest sum using 4 numbers in the array
 * NOTE: THEY HAVE TO BE IN ORDER -- YOU CAN'T SKIP A NUMBER or start from different side.. those are pointers.. 
 * you have to start from beginning to end
 */

// BEST CASE SOLUTION:
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)