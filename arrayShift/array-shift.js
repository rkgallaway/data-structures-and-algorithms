'use strict';

let arrayShift = module.exports = {};


arrayShift.insertShiftArray = (inputArray, value) =>{
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
};

//as of now I have not tested.  due to my accident I haven't done lab-01, I will complete that lab before doing tests here.  I will submit for now so That I have possibility of full credit or if not full credit willa t least maintain work flow.  Cheers