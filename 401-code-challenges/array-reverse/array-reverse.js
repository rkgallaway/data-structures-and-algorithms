'use strict';

function reverseArray(inArray){
  if(inArray.length <= 1){
    return inArray;
  }
  if (Array.isArray(inArray) === false){
    return 'please enter an array as a parameter';
  }
  let newArray = [];
  let counter = 0;
  for (let i = inArray.length - 1; i >= 0; i--){
    newArray[counter] = inArray[i];
    counter++;
  }
  return newArray;
}

module.exports = reverseArray;