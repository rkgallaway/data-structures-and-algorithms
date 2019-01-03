'use strict';

const LinkedList = require('../linkedList.js');

let list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

let list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

function zipList(list1, list2){
  let current1 = list1.head;
  let current2 = list2.head;
  let zipCurrent = zipCurrent.next;
  while(current1.next && current1){
    zipCurrent.next = current1;
    current1 = current1.next;
    zipCurrent = zipCurrent.next;
    zipCurrent.next = current2;
    current2 = current2.next;
    zipCurrent = zipCurrent.next;
  }
  if(current1.next){
    zipCurrent.next = current1;
  } else {
    zipCurrent.next = current2;
  }
  return zipList.head;
}

zipList();
