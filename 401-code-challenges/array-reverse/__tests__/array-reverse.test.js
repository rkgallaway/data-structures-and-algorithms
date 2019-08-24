'use strict';

const reverseArray = require('../array-reverse.js');

describe('reverseArray tests', () => {
  it('reverses an array as expected', () => {
    let array = [1, 2, 3, 4, 5];
    expect(reverseArray(array)).toEqual([5, 4, 3, 2, 1]);
  });
  it('requires an array as input', () => {
    let array = 'bananas';
    expect(reverseArray(array)).toEqual('please enter an array as a parameter');
  });
  it('returns an empty array as expected', () => {
    let array = [];
    expect(reverseArray(array)).toEqual([]);
  });
});