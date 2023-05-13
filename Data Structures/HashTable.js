// basic hash class set up
// in order to access values by keys
// hashing functions convert keys into valid array indices

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

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
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
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