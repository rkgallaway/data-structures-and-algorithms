'use strict';

let Queue = require('../../stacks-and-queues/stacks-and-queues.js').Queue;

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
  
  preOrder() {
    let nodes = [];
   
    function _walk(node){  
      nodes.push(node.value);    
      if(node.left){
        _walk(node.left);
      } 
      if(node.right){ 
        _walk(node.right);
      }
    }
    _walk(this.root);
    return nodes;
  }
 
  inOrder(){
    let nodes = [];
   
    let _walk = (node) => {  
      if(node.left){ 
        _walk(node.left);
      } 
      nodes.push(node.value);  
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
    return nodes;
  }
  
  postOrder(){
    let nodes = [];
   
    let _walk = (node) => { 
      if(node.left){ 
        _walk(node.left);
      } 
      if(node.right){
        _walk(node.right);
      }
      nodes.push(node.value);  

    };
    _walk(this.root);
    return nodes;
  }

 
  MYbreadthFirst(){
    let nodes = [];
    let breadth = new Queue();

    breadth.enqueue(this.root);
    while(breadth.front){
      nodes.push(breadth.front.value);
      if(breadth.front.left){
        breadth.enqueue(breadth.front.left);
      }
      if(breadth.front.right){
        breadth.enqueue(breadth.front.right);
      }
      breadth.dequeue();
    }
    return nodes;
  }

 

  findMaximumValue(){
   
    let max = 0;
    let _walk = (node) => {
      if(node.value > max){
        max = node.value;
      }
      if(node.left){
        _walk(node.left);
      }
      if(node.right){
        _walk(node.right);
      }
    };
    _walk(this.root);
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

// console.log(tree.preOrder());

module.exports = {Node, Tree};

