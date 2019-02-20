'use strict';

let quickSort = require('./quick-sort.js');

describe('Quick Sort Test:', () => {
  it('behaves with an empty array', () => {
    let arr = [];
    expect(quickSort(arr)).toEqual([]);
  });
  it('works as expected with an array containing one item', () => {
    let arr = [1];
    expect(quickSort(arr)).toEqual([1]);
  });
  it('Behaves as expected with an unsortd array', () => {
    let arr = [5, 4, -1, 9, 10];
    expect(quickSort(arr)).toEqual([-1, 4, 5, 9, 10]);
  });
});