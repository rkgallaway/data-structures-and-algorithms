'use strict';

const arrayShift = require('../array-shift.js');

describe ('proof  key-inclusive works', () => {
  it ('works as expected with sorted array and include value', () =>{
    let result = arrayShift([1, 2, 4, 5], 3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe ('proof of key-exclusive works', () => {
  it ('works as expected with sorted array and excluded value', () =>{
    let result = arrayShift(['1', '2', '3', '5', '6'], '4');
    expect(result).toEqual(['1', '2', '3', '4', '5', '6']);
  });
});

describe ('if array only contains 1 param', () =>{
  it ('works as expected if array only given 1 param', ()=>{
    let result = arrayShift([2], 2);
    expect(result).toEqual([2, 2]);
  });
});