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
    this.back = null;
  }
  enqueue(value){
    let node = new Node(value);
    if(!this.front && !this.back){
      this.front = node;
      this.back = node;
    }
    this.back.next = node;
    this.back = node;
  }
  dequeue(){
    if (!this.front){
      return 'nothing to dequeue, queue is empty';
    }
    let temp = this.front.value;
    if (!this.front.next){
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return temp; 
  }
  peek(){
    return this.front.value;
  }
}

module.exports = {Stack, Queue};