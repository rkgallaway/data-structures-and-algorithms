'use strict';

const LinkedList = require('../../linked-lists/linked-list.js');



function zipList(list1, list2){

  if (list1.head === null){
    return 'Please enter at least one Linked List as a parameter';
  }
  if (!list2 || list2.head){
    return list1.head;
  }
  let current1 = list1.head;
  let current2 = list2.head;
  let zippedList = new LinkedList();

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

module.exports = zipList;