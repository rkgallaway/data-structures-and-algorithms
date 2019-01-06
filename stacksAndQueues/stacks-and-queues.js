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
    this.previous = null;
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
    node.previous = this.top;
    this.top = node;
  }
  pop(){
    let newTop = this.previous;
    let temp = this.top;
    this.top = newTop;
    return temp; //????  test - not sure
    //removes node from top  //just remove reference to it?
  }
  peek(){
    return this.top.value;
  }
  print(){
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.previous;
    }
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
      node.front = node;
    } else{
      let queuedNode = this.front;
      while(queuedNode.next){
        queuedNode = queuedNode.next;
      }
      queuedNode.next = node;
    }

    //adds value to the back of queue
  }
  dequeue(){
    let newFront = this.next;
    let temp = this.front;
    this.front = newFront;
    return temp; //????  test - not sure

    //remove node from front of queue
  }
  peek(){
    return this.front;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(14);
stack.push(2);
stack.push(3);
// stack.peek(); // returning undefined
// console.log(util.inspect(stack, {depth: 10,}));
// stack.pop();  //not working
stack.print();

stack.peek(); // returning undefined
// console.log(util.inspect(stack, {depth: 10,}));

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log(util.inspect(q, {depth: 10,}));

q.peek();

module.exports = {Stack, Queue,};