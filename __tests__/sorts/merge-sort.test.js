'use strict';

const mergeSort = require('../../sorts/mergeSort/merge-sort.js');

describe('Merge Sort Tests', () => {
  it('returns empty array as expected', () => {
    let arr = [];
    expect(mergeSort(arr)).toEqual('paramater must be an array');
  });
  it('returns array of 1 as expected', () => {
    let arr = [1];
    expect(mergeSort(arr)).toEqual([1]);
  });
  it('returns array sorted as expected', () => {
    let list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
    expect(mergeSort(list)).toEqual([1, 2, 2, 3, 3, 3, 5, 6, 7, 8]);
  });
});
