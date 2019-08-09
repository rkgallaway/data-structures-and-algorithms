'use strict';

const BinaryTree = require('../binary-tree.js');
const Node = require('../node.js');

describe('BinaryTree tests', () => {
  it('Can successfully instantiate an empty BinaryTree', () => {
    let tree = new BinaryTree();
    expect(tree instanceof BinaryTree).toBeTruthy();
  });
  it('preOrder method works as expected', () => {
    const tree = new BinaryTree();
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    tree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3, 6]);
  });
  it('inOrder method works as expected', () => {
    const tree = new BinaryTree();
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    tree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    expect(tree.inOrder()).toEqual([4, 2, 5, 1, 6, 3]);
  });
  it('postOrder method works as expected', () => {
    const tree = new BinaryTree();
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    tree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    expect(tree.postOrder()).toEqual([4, 5, 2, 6, 3, 1]);
  });
  it('breadthFirst method works as expected', () => {
    const tree = new BinaryTree();
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
    const e = new Node(5);
    const f = new Node(6);
    tree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    expect(tree.breadthFirst()).toEqual([1, 2, 3, 4, 5, 6]);
  });



});