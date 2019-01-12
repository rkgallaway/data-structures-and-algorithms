'use strict';

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
   led nodes = [];
   
   let _walk = (node) => {  //base case
    nodes.push(node.value);    //put break point here in debugger
    if(node.left){ _walk(node.left); 
    if(node.right){ _walk(node.right);
   };
   return nodes;
  }
 
 inOrder() {
   led nodes = [];
   
   let _walk = (node) => {  //base case
    nodes.push(node.value);
    if(node.left){ _walk(node.left); 
    nodes.push(node.value);  //all about when you evaluate  //put break point here in debugger
    if(node.right){ _walk(node.right);
   };
   return nodes;
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