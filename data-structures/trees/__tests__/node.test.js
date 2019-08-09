'use strict';

const Node = require('../node.js');

describe('Node tests', () => {
  it('Can successfully instantiate an empty Node', () => {
    let node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });
  it('Can successfully instantiate a node with a value', () => {
    let node = new Node(7);
    expect(node.value).toEqual(7);
  });
  it('Has expected properties and key value pairs', () => {
    let node = new Node(5);
    let expectedKeys = ['value', 'left', 'right'];
    let expectedValues = [5, null, null];
    expect(Object.keys(node)).toEqual(expectedKeys);
    expect(Object.values(node)).toEqual(expectedValues);
  });

});

