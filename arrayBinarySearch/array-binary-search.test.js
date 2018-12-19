'use strict';

const arrayBinarySearch = require('./array-binary-search.js');

describe ('proof  key-inclusive works', () => {
  it ('works as expected with sorted array and include value', () =>{
    let result = arrayBinarySearch.binarySearch(['a', 'b', 'c'], 'c');
    expect(result).toEqual('2');
  });
});

describe ('proof of key-exclusive works', () => {
  it ('works as expected with sorted array and excluded value', () =>{
    let result = arrayBinarySearch.binarySearch(['a', 'b', 'c'], 'd');
    expect(result).toEqual(-1);
  });
});

describe ('if array contains an object', () =>{
  it ('works as expected if array contains object', ()=>{
    let result = arrayBinarySearch.binarySearch([{}], 'd');
    expect(result).toEqual(null);
  });
});