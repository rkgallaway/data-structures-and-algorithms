'use strict';

let Queue = require('../../stacks-and-queues/stacks-and-queues.js');

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  //traversals
  
  preOrder() {
    let nodes = [];
   
    let _walk = (node) => {  //base case
      nodes.push(node.value);    //put break point here in debugger
      if(node.left){
        _walk(node.left);
      } 
      if(node.right){ 
        _walk(node.right);
      }
    };
    return nodes;
  }
 
  inOrder(){
    let nodes = [];
   
    let _walk = (node) => {  //base case
      if(node.left){ 
        _walk(node.left);
      } 
      nodes.push(node.value);  //all about when you evaluate  //put break point here in debugger
      if(node.right){
        _walk(node.right);
      }
    };
    return nodes;
  }
  
  postOrder(){
    let nodes = [];
   
    let _walk = (node) => {  //base case
      if(node.left){ 
        _walk(node.left);
      } 
      if(node.right){
        _walk(node.right);
      }
      nodes.push(node.value);  //all about when you evaluate  //put break point here in debugger

    };
    return nodes;
  }
  breadthFirst(tree){
    let arr = [];
    let breadth = new Queue();
    breadth.enqueue(tree.root);
    while(breadth.peek){
      arr.push(breadth.front.value);
      if(front.left){
        breadth.enqueue(front.left);
      }
      if(front.right){
        breadth.enqueue(front.right);
      }
      breadth.dequeue(front);
    }
    return arr;
  }

  findMaximumValue(){
    if (!tree.root){
      return;}
    let max = this.root.value;
    let queue = new queue();
    queue.enqueue(this.root);
    while(queue.length){
      let node = queue.dequeue();
      if(max < node.value){
        max = node.value;
      }
      if (node.left){
        queue.enqueue(node.left);
      }
      if (node.right){
        queue.enqueue(node.right);
      }
    }
    return max;
  }
  
}
 
module.exports = Tree;

let tree = new Tree();
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
a.left = b;
a.right = c;
c.left = f;
b.left = d;
b.left = e;
tree.root = a;

console.log(tree.preOrder());

module.exports = {Node, Tree};

