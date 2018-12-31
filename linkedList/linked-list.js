'use strict';

const util = require('util');

//create node class
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//created linked list class
class LinkedList{
  constructor(){
    this.head = null;
  }
  add(value){
    let node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      //do stuff
      current = current.next;
    }
    current.next = node;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let current = this.head;
    // let value = current.value;
    while(current.next){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  

  print(){
    let current = this.head;
    while(current.next){
      console.log(current.value);
      current = current.next;
    }
  }
  //code challenge 06 begins
  append(value){
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    let newNode = new Node(value);
    current.next = newNode;
    Node.next = null;
  }

  insertBefore(value, newVal){
    let current = this.head;
    while(current.next){
      if(current.next.value === value){
        break;
      }
      current = current.next;
    }
    if(current.next === null){
      console.log('value does not exist');
    }
    else{
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(value, newVal){
    let current = this.head;
    while(current.next){
      if(current.value === value){
        break;
      }
      current = current.next;
    }
    if(current.next === null){
      console.log('value does not exist');
    }
    else{
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  kthFromEnd(k){
    let arrayOfValues = [];
    let current = this.head;
    //edge cases?
    while(current.next){
      arrayOfValues.push(current.value);
      current = current.next;
    }
    return arrayOfValues[arrayOfValues.length - (k + 1)];
  }
}

let list = new LinkedList();
list.add('Ryan');
list.add('Amy');
list.add('Wiener');
list.add('Fat Alice');
list .add('Scamper');
list.insert('mom');
console.log(list.includes('Amy'));
list.insertBefore('Amy', 42);
list.insertBefore('jo', 42);
list.insertAfter('jo', 'dog');
list.append('Shana');
list.insertAfter('Wiener', 'dog');
list.print();
console.log(list.kthFromEnd(3));

module.exports = LinkedList;
