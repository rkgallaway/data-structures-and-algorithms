'use strict';

const Stack = require('../../data-structures/stacks-and-queues/stack.js');



class PsuedoCode {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue (){
    let temp = 0;
    if(!this.stack1.top){
      return 'cannot dequeue from empty stack';
    } else {
      while(this.stack1.top){
        temp = this.stack1.pop();
        if(this.stack1.top){
          this.stack2.push(temp);
        }else{
          break;
        }
      }
    }
    while(this.stack2.top){
      this.stack1.push(this.stack2.pop());
    }
    return temp;
  }
}

module.exports = PsuedoCode;