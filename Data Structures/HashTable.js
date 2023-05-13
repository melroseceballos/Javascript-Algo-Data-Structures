// basic hash class set up
// in order to access values by keys
// hashing functions convert keys into valid array indices

class HashTable {
  // how big the hash table to be: Note that it's a prime number
  constructor(size=53){
    // making a new array to store keys
    this.keyMap = new Array(size);
  }

  // this is the optimized hash function. same thing coded below
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // accepts a key and a value
  set(key,value){
    // hashes the key
    let index = this._hash(key);
    // creates subarrays in order to store multiple key-value pairs in one index
    // it's using separate chaining
    // checks if the is a value in the index
    if(!this.keyMap[index]){
      // if not it creates a new subarray
      this.keyMap[index] = [];
    }
    // pushing the subarray into the index
    this.keyMap[index].push([key, value]);
  }
  get(key){
    // takes whatever key you are looking for
    let index = this._hash(key);
    // checks if the key that I'm looking for is in an index
    if(this.keyMap[index]){
      // loops through that index
      for(let i = 0; i < this.keyMap[index].length; i++){
        // if the key and value is in there, it return the key-value pairs
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    // otherwise, it will return undefined
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")




//this function will only hash string
// .charCodeAt() gives the corresponding of a letter
// make sure to subtract it by -96
// EX:
// "a".charCodeAt(0) output: 1
// b.charCodeAt(0) output: 2
// z.charCodeAt(0) output: 26

//basic function in hashing strings
function hash(key, arr){
  let total = 0;
  for(let char of key){
    // this is mapping or looping through the keys to get the numerical value of the characters/letters
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arr
  }
  return total
}

// an optimized hash function that uses prime
function hash (key,arr){
  let total = 0;
  let prime = 31;
  for(let i = 0; i<Math.min(key.length, 100); i++){
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * prime + value) % arr
  }
  return total;
}


// KEY
keys(){
  let keysArr = [];
  for(let i = 0; i < this.keyMap.length; i++){
    if(this.keyMap[i]){
      for(let j = 0; j < this.keyMap[i].length; j++){
        if(!keysArr.includes(this.keyMap[i][j][0])){
          keysArr.push(this.keyMap[i][j][0])
        }
      }
    }
  }
  return keysArr;
}