'use strict';

function mergeList(list1, list2){
  if(arguments.length !== 2){
    return 'you must enter two lists';
  }

  let current1 = list1.head;
  let current2 = list2.head;

  while(current1.next && current2.next){
    let next1 = current1.next;
    let next2 = current2.next;
    current1.next = current2;
    current2.next = next1;
    current1 = next1;
    current2 = next2;
  }
  current1.next = current2;
  if(current2.next){
    current1.next = current2;
  }
  return list1;
}

module.exports = mergeList;