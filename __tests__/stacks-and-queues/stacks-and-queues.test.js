'use strict';

const StacksAndQueues = require('../../stacks-and-queues/stacks-and-queues.js');

describe('Stack Tests:', () => {
  it('Creates an instance of a stack', () => {
    let stack = new StacksAndQueues.Stack();
    expect(stack instanceof StacksAndQueues.Stack).toBeTruthy();
  });

  describe('Test push(value) and peek() methods:', () => {
    it('Returns null from an empty stack', () => {
      let stack = new StacksAndQueues.Stack();
      expect(stack.peek()).toEqual('nothing to peek at on an empty stack');
    });
    it('Returns the top item from the stack', () =>{
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('Does not alter the stack', () =>{
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
    });
  });

  describe('Test push(value) and pop() methods:', () => {
    it('Returns appropriately if stack is empty', () => {
      let stack = new StacksAndQueues.Stack();
      expect(stack.pop()).toEqual('nothing to pop on an empty stack');
    });
    it('Following a single pop(), the head of the stack is returned as expected', () => {
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek()).toEqual(2);
    });
    it('Following multiple pop()\'s, the head of the stack is returned as expected', () => {
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();

      expect(stack.peek()).toEqual(1);
    });

  });
});

describe('Queue tests:', () => {
  it('Creates an instance of a queue:', () => {
    let queue = new StacksAndQueues.Queue();
    expect(queue instanceof StacksAndQueues.Queue).toBeTruthy();
  });
  describe('Test enqueue(value) and peek() methods:', () => {
    it('Requires a parameter for node.value to be defined', () => {
      let queue = new StacksAndQueues.Queue();
      queue.enqueue();
      expect(queue.peek()).toEqual(undefined);
    });
    it('Adds a single node to the queue,', () => {
      let queue = new StacksAndQueues.Queue();
      queue.enqueue(1);
      expect(queue.peek()).toEqual(1);
    });
    it('Adds multiple nodes to the queue, and adds them in the correct order,', () => {
      let queue = new StacksAndQueues.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);
    });
  });

  describe('Test dequeue() method', () => {
    it('Returns as expected from an empty queue', () => {
      let queue = new StacksAndQueues.Queue();
      expect(queue.dequeue()).toEqual('nothing to dequeue, queue is empty');
    });
    it('Removes a single node from the queue and behaves as expected,', () => {
      let queue = new StacksAndQueues.Queue();
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.dequeue()).toEqual(1);
      expect(queue.peek()).toEqual(null);
    });
    it('Removes multiple nodes from the queue, in the correct order,', () => {
      let queue = new StacksAndQueues.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      expect(queue.dequeue()).toEqual(2);
    });
  });
});


