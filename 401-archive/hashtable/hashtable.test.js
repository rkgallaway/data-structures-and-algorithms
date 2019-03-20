'use strict';

let HashTable = require('./hashtable.js');

describe('Hashtable tests', () => {
  it('Creates a new hashtable', () => {
    let newHash = new HashTable();
    expect(newHash).toBeInstanceOf(HashTable);
  });
});