'use strict';

let fizzBuzzTree = require('./fizz-buzz-tree.js');
let Tree = require('../binary-tree');
let Node = require('../node.js');

describe('fizz-buzz-tree', () => {
  let a = new Node(5);
  let b = new Node(2);
  let c = new Node(15);
  let d = new Node(-3);
  let e = new Node(4);
  let f = new Node(6);

  const myTree = new Tree();
  myTree.root = a;

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  it('can handle no parameters without errors', () => {
    fizzBuzzTree();
    expect(fizzBuzzTree()).toEqual('you must enter one tree');
  });
  it('modifies tree as expected', () => {
    fizzBuzzTree(myTree);
    expect(a.value).toEqual('Buzz');
    expect(b.value).toEqual(2);
    expect(c.value).toEqual('FizzBuzz');
    expect(d.value).toEqual('Fizz');
    expect(e.value).toEqual(4);
    expect(f.value).toEqual('Fizz');
  });
});

it('correctly changes a tree', () => {
  const myTree2 = new Tree();

  expect(() => {
    fizzBuzzTree(myTree2);
  }).not.toThrow();
});
