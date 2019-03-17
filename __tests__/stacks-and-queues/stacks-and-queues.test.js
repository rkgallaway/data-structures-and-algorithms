'use strict';

const StacksAndQueues = require('../../stacks-and-queues/stacks-and-queues.js');

describe('Stack Tests:', () => {
  it('creates an instance of a stack', () => {
    let stack = new StacksAndQueues.Stack();
    expect(stack instanceof StacksAndQueues.Stack).toBeTruthy();
  });

  describe('push(value) and peek() methods:', () => {
    it('returns null on an empty stack', () => {
      let stack = new StacksAndQueues.Stack();
      expect(stack.peek()).toEqual('nothing to peek at on an empty stack');
    });
    it('returns the top item on the stack', () =>{
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('does not alter the stack', () =>{
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      expect(stack.peek()).toEqual(1);
    });
  });

  describe('push(value) and pop() methods:', () => {
    it('returns appropriately if stack is empty', () => {
      let stack = new StacksAndQueues.Stack();
      expect(stack.pop()).toEqual('nothing to pop on an empty stack');
    });
    it('following a single pop(), the head of the stack is as expected', () => {
      let stack = new StacksAndQueues.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek()).toEqual(2);
    });
    it('following multiple pop()\'s, the head of the stack is as expected', () => {
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

describe('Queue tests', () => {
  it('Creates an Instance', () => {
    let queue = new StacksAndQueues.Queue();
    expect(queue instanceof StacksAndQueues.Queue).toBeTruthy();
  });
  describe('dequeue method', () => {
    it('returns null on an empty queue', () => {
      let queue = new StacksAndQueues.Queue();
      expect(queue.dequeue()).toEqual('nothing to dequeue from on an empty queue');
    });
  });
});


