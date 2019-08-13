'use strict';

function binarySearch(arr, val){
  let output = -1;

  if (typeof(arr[0]) === 'object'){
    output = null;
  }

  if (output !== null){
    for (let i in arr){
      if (arr[i] === val){
        output = i;
      }
    }
  }
  return output;
}

module.exports = binarySearch;
