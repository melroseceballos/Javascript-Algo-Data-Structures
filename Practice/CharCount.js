// write a function that takes a word and return the count of each character in the word

// First thing to do is understand the problem
// so basically if I was given the word 'apple'
// I want it to give me a: 1 p:2 l: 1 e:1 
// that would be an object because it is key-value

//1. create a function that accepts a string argument
function charCount(str){
    // 2. you want an object in return so I have to introduce an object first
    let obj = {}
    // 3. I want to go over every single letter in the word so using a for loop is best
    for (let i = 0; i<str.length; i++){
        // 4. store the value of character arrays in a different variable
        const value = str[i]
        // 5. I now want to check if the letter is already in the object
        // if it is I'm gonna keep adding it ++
        // if not I'm going to set it to 1
        if(obj[value] > 0){
          obj[value]++
        }else{
          obj[value] = 1
        }
    }
    // 6. Now I want to return the object
    return obj
}
console.log(charCount('apple'))