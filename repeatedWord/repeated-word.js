'use strict';

const HashTable = require('../hashtable/hashtable.js');

function repeatedWord(str){
  let tempArr = str.split(' ');
  let hash = new HashTable(50);

  for (let i in tempArr){
    let occurance = 0;
    hash.add(tempArr[i], occurance);
    occurance++;
    if (occurance > 1){
      return tempArr[i];
    }
    else{
      return 'no duplicate words found';
    }
  }
}



module.exports = repeatedWord;