const zipList = require('../../401-code-challenges/llMerge/ll-merge.js');
const LinkedList = require('../../linked-lists/linked-list.js');

describe('Code Challenge 08:  Zipped inked ist merge', () => {
  it('works as expected if lists have equal amount of values', () =>{
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);
    list1.insert(5);

    let list2 = new LinkedList();
    list2.insert(2);
    list2.insert(4);
    list2.insert(6);
    expect(zipList(list1, list2)).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 2}, "value": 3}, "value": 4}, "value": 5}, "value": 6}});
  });
});


