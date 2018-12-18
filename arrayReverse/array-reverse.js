'use strict';

function reverseArray(inArray){
  if(inArray.length <= 1){
    return inArray;
  }
  let newArray = [];
  let counter = 0;
  for (let i = inArray.length; i <= 0; i--){
    newArray[counter] = inArray[i];
    counter++;
  };
  console.log(newArray);
  return newArray;
}