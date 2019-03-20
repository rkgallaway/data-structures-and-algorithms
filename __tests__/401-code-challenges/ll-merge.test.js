const mergeList = require('../../401-code-challenges/llMerge/ll-merge.js');
const LinkedList = require('../../linked-lists/linked-list.js');

describe('Code Challenge 08:  Zipped inked ist merge', () => {
  it('rewuires 2 parameters', () =>{
    let list1 = new LinkedList();
    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    let list2 = new LinkedList();
    list2.insert(6);
    list2.insert(4);
    list2.insert(2);
    expect(mergeList(list1)).toEqual('you must enter two lists'); 
    expect(mergeList(list2)).toEqual('you must enter two lists'); 
  });
  it('works as expected if lists have equal amount of nodes', () =>{
    let list1 = new LinkedList();
    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    let list2 = new LinkedList();
    list2.insert(6);
    list2.insert(4);
    list2.insert(2);
    expect(mergeList(list1, list2)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 6}, 'value': 5}, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 1}});
  });
  it('works as expected if second list has greater amount of nodes', () =>{
    let list1 = new LinkedList();
    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    let list2 = new LinkedList();
    list2.insert(9);
    list2.insert(8);
    list2.insert(7);
    list2.insert(6);
    list2.insert(4);
    list2.insert(2);
    expect(mergeList(list1, list2)).toEqual({'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 9}, 'value': 8}, 'value': 7}, 'value': 6}, 'value': 5}, 'value': 4}, 'value': 3}, 'value': 2}, 'value': 1}});
  });
});


