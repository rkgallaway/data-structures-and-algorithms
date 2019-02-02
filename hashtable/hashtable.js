'use strict';

class HashMap{
  constructor(size){
    this. size = size;
    this.map = new Array(size);
  }
  // turn the key (can be anything) into a number
  //that number will be 0 - this.size
  hash(key){
    let chars = key.split('');
    let aggVal = chars.reduce((accumulator,value) => accumulator + value.charCodeAt(0), 0) % this.size;
    return aggVal % this.size;
    //return key.split('').reduce((accumulator,value) => a + v.charCodeAt(0), 0) % this.size;

  }

  set(key, value){
    let hash = this.hash(key);
    console.log(key, hash);
    if (! this.map[hash]){this.map[hash] = [];}
    this.map[hash].push({[key]:value,});
  }

  has(value){
    let hash = this.value;  //need more for solution  // remember ****only conceptual example
    return this.map[hash].contains
    (value);
  }
}

let myHash = new HashMap(6);
myHash.set('John', 'Dad');