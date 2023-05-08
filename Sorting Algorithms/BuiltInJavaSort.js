/*Ex: using .sort()
- sorts array numerically
**/

function javaSort (num1, num2){
    // num1-num2 this sorts array from smallest to biggest

    return num1 - num2
    }
            // using the .sort here
    console.log([1,2,4,9,7,3,5,8,6].sort(javaSort))
    
    function javaSort (num1, num2){
        // this now sorts from biggest to smallest
        
        return num2 - num1
        }
            // using the .sort here
        console.log([1,2,4,9,7,3,5,8,6].sort(javaSort))
        