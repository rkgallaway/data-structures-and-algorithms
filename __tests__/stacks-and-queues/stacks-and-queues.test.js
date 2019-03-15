'use strict';

const StacksAndQueues = require('../../stacks-and-queues/stacks-and-queues.js');

describe('stacks-and-queues.js tests', () => {
  describe('stack', () => {

    it('creates an instance', () => {
      let stack = new StacksAndQueues.Stack();
      expect(stack instanceof StacksAndQueues.Stack).toBeTruthy();
    });

    describe('peek()', () => {
      it('returns null on an empty stack', () => {
        let stack = new StacksAndQueues.Stack();
        expect(stack.peek()).toEqual('nothing to peek at on an empty stack');
      });

      it('returns the top item', () =>{
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

      it('following a pop() points to the new head of the stack', () => {
        let stack = new StacksAndQueues.Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.peek()).toEqual(2);
      });
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


