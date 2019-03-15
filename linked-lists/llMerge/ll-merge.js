'use strict';

const list = require('../linkedList/linked-list.js');

let list1 = new list.LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

let list2 = new list.LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

function zipList(list1, list2){
  let current1 = list1.head;
  let current2 = list2.head;
  let zippedList = new list.LinkedList();
  while(current1.next || current2.next){
    if(current1.value){
      zippedList.add(current1.value);
      current1 = current1.next;
    } else
    if(current2.value){
      zippedList.add(current2.value);
      current2 = current2.next;
    }
  }
  if(current1.value){
    zippedList.add(current1.value);
  }
  if(current2.value){
    zippedList.add(current2.value);
    return zippedList.head;
  }
}

zipList();

