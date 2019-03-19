'use strict';

let radixSort = require('../../sorts/radixSort/radix-sort.js');

describe('Radix Sort Tests:', () => {
  it('works as expected with a populated unsorted array', () => {
    let arr = [3, 1, 55, 5, 113, 90];
    expect(radixSort(arr)).toEqual([1, 3, 5, 55, 90, 113]);
  });
  it('works as expected with a populated array of 1', () => {
    let arr = [1];
    expect(radixSort(arr)).toEqual([1]);
  });
  it('works as expected with an unpopulated', () => {
    let arr = [];
    expect(radixSort(arr)).toEqual([]);
  });
});