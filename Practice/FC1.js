/**Write a function called sameFrequency. 
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 * Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

// I have to come up with a solution that takes can accept 2 numbers

function sameFrequency(num1, num2)    {
    // and then in order for me to get the length of those numbers I have to use the .length()
        let str1 = num1.toString()
        let str2 = num2.toString()
        // I have to check the very first thing is they are even as long as each other
        if (str1.length !== str2.length){
            return false
        }
        // I then have to make sure I get an object results since objects are easier to access with a log of O(1) constant 
        let obj1 = {}
        let obj2 = {}
        
        for(let i=0; i<str1.length; i++){
            let value1 = str1[i]
            // inserting the current iteration to the object
            // after that I have to check the frequency of the keys
            // now it's 1:1 2:1 3:1 etc
            obj1[value1] = (obj1[value1] || 0) + 1
        }
        for(let j=0 ; j<str2.length; j++){
            let value2 = str2[j]
            obj2[value2] = (obj2[value2] || 0) + 1
         }
         // and then I have to check if they are the same
         for (let key in obj1){
             // if there is a key in obj2 and they keys are the same as object 1
             if(!(key in obj2 && obj2[key] === obj1[key]))
             // only return false using ! arithmetic operation 
             // so that it checks all of the numbers
             // instead of just checking 1 -- getting the same values and then returns true
             return false
         }
         return true
    }
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false