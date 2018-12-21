'use strict';

let binExport = module.exports = {};

binExport.binarySearch = (arr, val) => {
  let output = -1;

  if (typeof(arr[0]) === 'object'){
    output = null;
  }

  if (output !== null){
    for (let i in arr){
      //test edge cases here
      if (arr[i] === val){
        output = i;
      };
    };
  };
  return output;
};
