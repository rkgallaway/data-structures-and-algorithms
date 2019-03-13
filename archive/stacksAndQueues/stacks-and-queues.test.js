'use strict';

const StacksAndQueues = require('./stacks-and-queues.js');
const util = require('util');

describe('stacks-and-queues.js tests', () => {
  describe('stack', () => {

    it('creates an instance', () => {
      let stack = new StacksAndQueues.Stack();
      expect(stack instanceof StacksAndQueues.Stack).toBeTruthy();
    });

    describe('peek()', () => {
      it('returns null on an empty stack', () => {
        let stack = new StacksAndQueues.Stack();
        expect(stack.peek()).toBeNull();
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
  describe('enqueue method', () => {
    it('returns null on an empty queue', () => {
      let queue = new StacksAndQueues.Queue();
      expect(queue instanceof StacksAndQueues.Queue).toEqual(Error);
    });
  });
});


