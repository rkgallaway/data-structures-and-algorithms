'use strict';

const Tree = require('./tree.js').Tree;
const Queue = require('../../stacks-and-queues/stacks-and-queues.js').Queue; 
const Node = require('./tree.js').Node;

describe('tree max value', ()=> {
  it('can handle an empty tree', ()=> {
    const myTree = new Tree();    
    expect(myTree.findMaximumValue()).toEqual(null);
  });

  it('can handle an empty tree', ()=> {
    const myTree = new Tree();
    let result = myTree.findMaximumValue();  
    expect(result).toEqual(undefined);
  });

  it('can handle a tree with 1 node', ()=> {
    const myTree = new Tree();
    const a = new Node('1');
    myTree.root = a;

    let result = myTree.findMaximumValue();  
    expect(result).toEqual(1);
  });

  it('can handle a tree with more nodes', ()=> {
    const myTree = new Tree();
    const a = new Node('1');
    const b = new Node('2');
    const c = new Node('3');
    const d = new Node('4');
    const e = new Node('5');
    const f = new Node('6');
    myTree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    let expected = 6;
    let result = myTree.findMaximumValue();  
    expect(result).toEqual(expected);
  });

  it('can handle a tree with all negative values', ()=> {
    const myTree = new Tree();
    const a = new Node('-1');
    const b = new Node('-2');
    const c = new Node('-3');
    const d = new Node('-4');
    const e = new Node('-5');
    const f = new Node('-6');
    myTree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    e.left = f;
    let expected = -1;
    let result = myTree.findMaximumValue();  
    expect(result).toEqual(expected);
  });

});