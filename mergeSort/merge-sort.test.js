'use strict';

const mSort = require('./merge-sort.js'), mergeSort;
const mrge = require('./merge-sort.js'), merge;

describe('Merge Sort Tests', () =>{
  it('returns empty array as expected', () =>{
    let arr = [];
    expect(mSort.mergeSort(arr)).toBeNull();
  });
  it('returns array of 1 as expected', () => {
    let arr = [1];
    expect(mSort.mergeSort(arr)).toEqual([1]);
  });
  it('returns array sorted as expected', () => {
    let list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
    expect(mSort.mergeSort(list)).toEqual([ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]);
  });
});