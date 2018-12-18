'use strict';

function insertShiftArray(inputArray, value){
  let newArray = [];
  let half = Math.ceil(inputArray.length / 2);
  for( let i in inputArray){
    if (i < half){
      newArray[i] = inputArray[i];
    }
    if (i === half){
      newArray[i] = value;
    }
    if (i > half){
      newArray[i + 1] = inputArray[i];
    }
  }
  return newArray;
}

//as of now I have not tested.  due to my accident I haven't done lab-01, I will complete that lab before doing tests here.  I will submit for now so That I have possibility of full credit or if not full credit willa t least maintain work flow.  Cheers