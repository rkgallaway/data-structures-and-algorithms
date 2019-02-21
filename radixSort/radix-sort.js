'use strict';

function getPosition(num, place){
  return  Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}

// Helper function to determine number of digits in the longest number
function getMax(arr){
  let max = 0;
  for(let num of arr){
    if(max < num.toString().length){
      max = num.toString().length;
    }
  }
  return max;
}
// Main sorting function
function radixSort(arr){
  const max = getMax(arr);
  for(let i = 0;i < max;i++){
    let buckets = Array.from({length:10,},()=>[]); // creating 10 empty arrays
    for(let j = 0;j < arr.length;j++){
      buckets[getPosition(arr[j],i)].push(arr[j]); //push the number into desired bucket
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

module.exports = radixSort;


