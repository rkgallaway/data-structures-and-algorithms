'use strict';

//create node class
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  };
};

//created linked list class
class LinkedList{
  constructor(){
    this.head = null;
    this.next = null; // point to next??? or so the following methods handle that?
  };
  //define method insert here?
  //define method includes here?
  //define method print here?

  //still need to finish linked listts, but wanted current assignment added
  append(value){
    current = this.head;
    while(current.next !== null){
      current = current.next;
    };
    let newNode = new Node(value);
    current.next = newNode;
    Node.next = null;
  };

  insertBefore(value, newVal){
    current = this.head;
    while(current.next !== null){
      if(current.next.value === value){
        break;
      };
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    };
    else (console.log('value does not exist'));
  };

  insertAfter(vslue, newVal){
    current = this.head;
    while(current.next !== null){
      if(current.value === value){
        break;
      };
      let newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    };
    else (console.log('value does not exist'));
  };
};