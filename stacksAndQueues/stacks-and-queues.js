'use strict';

//create node class
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//creates Stack class
class Stack{
  constructor(){
    this.top = null;
  }
  push(value){
    let node = new Node(value);
    //adds new node to top
  }
  pop(){
    //removes node from top
  }
  peek(){
    //returns node at top -doesnt change stack
  }
}

//creates Queue class
class Queue{
  constructor(){
    this.front = null;
  }
  enqueue(value){
    //adds value to the back of queue
  }
  dequeue(){
    //remove node from front of queue
  }
  peek(){
    // returns node from front of stack -does not change Queue
  }
}