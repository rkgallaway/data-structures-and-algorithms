'use strict';

let HashTable = require('../hashtable.js');

describe('Hashtable tests', () => {
  it('Creates a new hashtable', () => {
    let newHash = new HashTable();
    expect(newHash).toBeInstanceOf(HashTable);
  });
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let newHash = new HashTable();
    newHash.add('Ryan', 'TA');
    expect(newHash.contains(name)).toBeTruthy();
  });
});

// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value