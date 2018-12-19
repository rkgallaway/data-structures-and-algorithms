'use strict';

const arrayBinarySearch = require('./array-binary-search.js');

describe ('proof  key-inclusive works', () => {
  it ('works as expected with sorted array and value', () =>{
    let result = arrayBinarySearch.binarySearch(['a', 'b', 'c'], 'c');
    expect(result).toEqual('2');
  });
});