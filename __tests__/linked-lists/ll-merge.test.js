const zipList = require('../../linked-lists/llMerge/ll-merge.js');
const LinkedList = require('../../linked-lists/linked-list.js');

describe('Code Challenge 08:  Zipped inked ist merge', () => {
  it('works as expected if lists have equal amount of values', () =>{
    let list1 = new LinkedList();
    list1.add(1);
    list1.add(3);
    list1.add(5);

    let list2 = new LinkedList();
    list2.add(2);
    list2.add(4);
    list2.add(6);
    expect(zipList(list1, list2)).toEqual(undefined);
  });
});


