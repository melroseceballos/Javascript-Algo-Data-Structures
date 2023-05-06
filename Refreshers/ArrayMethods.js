/******************************** ARRAY METHODS */

// Practicing push/pop && shift/unshift
const arr = [0,1,2,3,4,5]

/********** PUSH */
// If I wanted to add a number to the end of the array (after 5)
// I am going to use the push method like this:
// I don't need to use a const/let because it's already decared above
arr.push(6)
console.log(arr)
// I added a number as an argument which is whatever number 
// I want to add in the end of the array

/******** POP */
// If I wanted to remove the last number in the array (6)
// I am going to use the pop method like this:
// I am not adding an argument inside pop because 
// the method automatically takes out the last number
arr.pop()
console.log(arr)
// the expected output is 5 at the end of the array
// because we added/pushed 6 before doing the pop method

/********** SHIFT */
//if I wanted to remove the first number from the array [0]
// I am going to use the shift method like this:
// I am not going to add an argument inside because
// the method automatically removes the first number
arr.shift()
console.log(arr)

/*********** UNSHIFT */
// If I wanted to add a number infront of the array [1]
// It starts 1 now because we previously removed 0
// I am going to use the unshift method like this:
arr.unshift(0)
console.log(arr)
// I added an argument which is whatever number I want to add
// infront of the array





/********* SLICE METHOD */
// Basically, takes the array and copies it to form a new array without 
// destroying the original array it copied from
// you can slice like so : arrayname.slice(start, end)
// Example:
let colors = ['White', 'Red', 'Black', 'Blue', 'Green']

/*** SLICE START HERE */
// I want to create a new array that starts from Red 
const newArr = colors.slice(1)
console.log(newArr)
console.log(colors)

/** SLICE END HERE */
// I want to create a new array specifically with my start and end
// If I want to get an array with the color white through blue
// I would use the slice method like this
const a = colors.slice(0, 4)
console.log(a)


/****** SPLICE METHOD */
// This method can be used to add or delete items in an array
// This will change the original array
// this is the syntax for the splice method arrayname.splice(start,delete count, end)
const foods = ['cookies', 'milk', 'cereal', 'eggs', 'chicken']

// If I want to delete the cookies from the foods array 
// I will use the splice method like so:
foods.splice(0,1)
console.log(foods)

// If I want to add apple to the foods array between milk and cereal
// I will use the splice method like so:
foods.splice(1, 0, "apple")
console.log(foods)


/**** SPLIT() METHOD */
// takes a string or a word and creates a new array that 
// is the letters of the word
// Ex: "apple" = [a , p , p, l, e]

const word = 'apple' 
const newWord = word.split('')
console.log(newWord)