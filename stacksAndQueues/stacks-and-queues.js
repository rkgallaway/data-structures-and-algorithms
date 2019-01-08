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
      throw new Error('nothing to pop on an empty stack');
    }
    let temp = this.top;
    let newTop = this.top.next;
    this.top = newTop;
    return temp; //????  test - not sure
    //removes node from top  //just remove reference to it?
  }
  peek(){
    if(this.top === null){
      throw new Error('nothing to peek at on an empty stack');
    }
    return this.top.value;
  }
  // print(){
  //   let current = this.top;
  //   while (current) {
  //     current = current.next;
  //     console.log(current.value);
  //   }
  // }
}
//above is working!!!!!
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

    //adds value to the back of queue
  }
  dequeue(){
    if(this.front === null){
      throw new Error('nothing to dequeue from on an empty queue');
    }
    let newFront = this.front.next;
    let temp = this.front;
    this.front = newFront;
    return temp.value; //????  test - not sure

    //remove node from front of queue
  }
  peek(){
    return this.front;
  }
  // print(){
  //   let current = this.front;
  //   while (current.next) {
  //     current = current.next;
  //     console.log(current.value);
  //   }
  // }
}

// let stack = new Stack();
// stack.push(1);
// stack.push(14);
// stack.push(2);
// stack.push(3);
// console.log('this is the log we want', stack.peek()); // returning undefined
// console.log(util.inspect(stack, {depth: 10,}));
// stack.pop();  //not working
// stack.print();

// stack.peek(); // returning undefined
// console.log(util.inspect(stack, {depth: 10,}));
// 
// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// console.log('this value', q.dequeue());
// console.log('this value', q.dequeue());
// console.log('this value', q.dequeue());
// console.log('this value', q.dequeue());
// q.print();
// console.log(util.inspect(q, {depth: 10,}));

// q.peek();

module.exports = {Stack, Queue,};