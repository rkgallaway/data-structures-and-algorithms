'use strict';

const list = require('../linkedList/linked-list.js');

class HashTable{
  constructor(size){
    this. size = size;
    this.map = new Array(size);
  }

  add(key, value){
    let hash = this.hash(key);
    if (!this.map[hash]){this.map[hash] = new list.LinkedList();}
    this.map[hash].append({[key]:value,});
  }

  hash(key){
    let chars = key.split('');
    let aggVal = chars.reduce((accumulator,value) => accumulator + value.charCodeAt(0), 0) % this.size;
    return aggVal % this.size;

  }

  contains(key){
    let tempHash = this.hash(key);
    if (this.map[tempHash]){
      return (this.search(this.map[tempHash], key) ? true : false);
    }
    return false;
  }

  get(value){
    let hash = this.value;  
    return this.map[hash].contains
    (value);
  }

  search(linkedList, key){
    let current = linkedList.head;
    let object = null;
    while(current){
      if (object.key(current.value)[0] === key){ //key or keys
        return (object = current);
      }
      current = current.next;
    }
    return object;
  }

}

module.exports = HashTable;