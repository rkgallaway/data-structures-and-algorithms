'use astrict';

const BinarySearchTree = require('../binary-search-tree.js');

describe('BinarySearchTree tests', () => {
  it('Can successfully instantiate an empty BinarySearchTree', () => {
    let searchTree = new BinarySearchTree();
    expect(searchTree instanceof BinarySearchTree).toBeTruthy();
  });
});