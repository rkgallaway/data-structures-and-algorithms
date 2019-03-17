'use strict';

const util = require('util');


class Node{
  /**
   *Creates an instance of Node.
   * @param {*} value
   * @memberof Node
   */
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  /**
   *Creates an instance of Stack.
   * @memberof Stack
   */
  constructor(){
    this.top = null;
  }
  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop(){
    if(this.top === null){
      return 'nothing to pop on an empty stack';
    }
    let temp = this.top;
    let newTop = this.top.next;
    this.top = newTop;
    return temp; 
  }
  peek(){
    if(this.top === null){
      return 'nothing to peek at on an empty stack';
    }
    return this.top.value;
  }
}

class Queue{
  /**
   *Creates an instance of Queue.
   * @memberof Queue
   */
  constructor(){
    this.front = null;
  }
  enqueue(value){
    let node = new Node(value);
    if(!this.front){
      this.front = node;
    } else{
      let queuedNode = this.front;
      while(queuedNode.next){
        queuedNode = queuedNode.next;
      }
      queuedNode.next = node;
    }
  }
  dequeue(){
    if(this.front === null){
      return 'nothing to dequeue from on an empty queue';
    }
    let newFront = this.front.next;
    let temp = this.front;
    this.front = newFront;
    return temp.value; 
  }
  peek(){
    return this.front;
  }
}

module.exports = {Stack, Queue};