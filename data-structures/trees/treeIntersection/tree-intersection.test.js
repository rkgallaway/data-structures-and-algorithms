'use strict';

const intersection = require('./tree-intersection.js');

const Tree = require('../binary-tree.js');
const Node = require('../node.js');

describe('Tree tests', () => {
  it('Can successfully instantiate an empty Tree', () => {
    let tree = new Tree();
    expect(tree instanceof Tree).toBeTruthy();
  });
});

describe('Node tests', () => {
  it('Can successfully instantiate an empty Node', () => {
    let node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });
});

// describe('tree intersection function', () => {
//   it('returns an empty object when both parameters are undefined', () => {
//     let result = intersection();
//     let expected = {};
//     expect(result).toEqual(expected);
//   });

//   it('returns an empty object if either parameter is not of type BinaryTree', () => {
//     let result = intersection(5,5);
//     let expected = {};
//     expect(result).toEqual(expected);
//   });
//   it('returns an empty object when the second parameter is missing', () => {
//     let treeA = new Tree();
//     let a = new Node(1);
//     let b = new Node(2);
//     let c = new Node(3);
//     let d = new Node(4);
    
//     treeA.root = a;
//     a.left = b;
//     a.right = c;
//     b.left = d;
    
//     let result = intersection(treeA);
//     let expected = {};
//     expect(result).toEqual(expected);
//   });
//   it('returns an empty object when either tree is empty', () => {
//     let treeA = new Tree();
//     let a = new Node(1);
//     let b = new Node(2);
//     let c = new Node(3);
//     let d = new Node(4);
    
//     treeA.root = a;
//     a.left = b;
//     a.right = c;
//     b.left = d;

//     let treeB = new Tree();

//     let result = intersection(treeA, treeB);
//     let expected = {};
//     expect(result).toEqual(expected);

//   });
//   it('returns an empty object when there are no matching values', () => {
//     let treeA = new Tree();
//     let a = new Node(1);
//     let b = new Node(2);
//     let c = new Node(3);
//     let d = new Node(4);
    
//     treeA.root = a;
//     a.left = b;
//     a.right = c;
//     b.left = d;

//     let treeB = new Tree();
//     let q = new Node(5);
//     let r = new Node(6);
//     let s = new Node(7);
//     let t = new Node(8);

//     treeB.root = q;
//     q.left = r;
//     q.right = s;
//     r.left = t;

//     let result = intersection(treeA, treeB);
//     let expected = {};
//     expect(result).toEqual(expected);
//   });
//   it('correctly returns the matching values', () => {
//     let treeA = new Tree();
//     let a = new Node(1);
//     let b = new Node(2);
//     let c = new Node(3);
//     let d = new Node(4);
    
//     treeA.root = a;
//     a.left = b;
//     a.right = c;
//     b.left = d;

//     let treeB = new Tree();
//     let q = new Node(1);
//     let r = new Node(2);
//     let s = new Node(3);
//     let t = new Node(4);

//     treeB.root = q;
//     q.left = r;
//     q.right = s;
//     r.left = t;

//     let result = intersection(treeA, treeB);
//     let expected = {
//       '1': true,
//       '2': true,
//       '3': true,
//       '4': true,
//     };
//     expect(result).toEqual(expected);
//   });
// });