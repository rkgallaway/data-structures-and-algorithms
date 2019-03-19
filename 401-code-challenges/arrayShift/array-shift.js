'use strict';

function arrayShift(inputArray, value){
  let newArray = [];
  let half = inputArray.length;
  for( let i = 0; i < half + 1; i++){
    if (i < Math.ceil(half / 2)){
      newArray[i] = inputArray[i];
    }
    if (i === Math.ceil(half / 2)){
      newArray[i] = value;
    }
    if (i > Math.ceil(half / 2)){
      newArray[i] = inputArray[i - 1];
    }
  }
  return newArray;
}

module.exports = arrayShift;

