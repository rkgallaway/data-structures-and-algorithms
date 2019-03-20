'use strict';

const LinkedList = require('../../linked-lists/linked-list.js');



describe('Linked List, initial methods from Challenge-05', () =>{		
  it('insert method accepts a string', () =>{
    let newList = new LinkedList();
    newList.insert('Ryan');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Ryan'}});
  });
  it('insert method returns undefined if no parameter given', () =>{
    let newList = new LinkedList();
    newList.insert();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  it('insert method accepts a number', () =>{
    let newList = new LinkedList();
    newList.insert(1);
    expect(newList).toEqual({'head': {'next': null, 'value': 1}});
  });
  it('add method accepts a string', () =>{
    let newList = new LinkedList();
    newList.add('Ryan');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Ryan'}});
  });
  it('add method returns undefined if no parameter is given', () =>{
    let newList = new LinkedList();
    newList.add();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  it('add method accepts a string', () =>{
    let newList = new LinkedList();
    newList.add(1);
    expect(newList).toEqual({'head': {'next': null, 'value': 1}});
  });
  it('includes method succesfully searches an included string', () =>{
    let testList = new LinkedList();
    testList.add('bananas');
    console.log(testList.includes('bananas'));
    expect(testList).toEqual({'head': {'next': null, 'value': 'bananas'}});
  });
  it('includes method succesfully searches an excluded string', () =>{
    let testList = new LinkedList();
    testList.add('bananas');
    expect(console.log(testList.includes('nachos'))).toBeFalsy();
  });
  it('includes method must search with one parameter', () =>{
    let testList = new LinkedList();
    testList.add('bananas');
    expect(testList.includes('foo')).toEqual(false);
  });
  it('print method returns list as expected', () =>{
    let newList = new LinkedList();
    newList.insert('Ryan');
    let tester = newList.print();
    expect(tester).toBeFalsy();
  });
  it('print method returns only head if list is empty', () =>{
    let newList = new LinkedList();
    let tester = newList;
    expect(tester).toEqual( {'head': null});
  });	
  it('print method will not return a value that has not been added to list', () =>{
    let newList = new LinkedList();
    newList.add('a');
    
    expect(newList).not.toEqual({'head': {'next': null, 'value': 'b'}});
  });	
});

describe('Linked list, methods from Challenge-06', () =>{
  it('append method works as expected', () => {
    let newList = new LinkedList();
    newList.add('Wiener');
    newList.add('Ryan');
    newList.append('dog');
    expect(newList).toEqual( {'head': {'next': {'next': {'next': null, 'value': 'dog'}, 'value': 'Ryan'}, 'value': 'Wiener'}});
  });it('append method does not insert at beginning', () => {
    let newList = new LinkedList();
    newList.add('Wiener');
    newList.add('Ryan');
    newList.append('dog');
    expect(newList).toEqual( {'head': {'next': {'next': {'next': null, 'value': 'dog'}, 'value': 'Ryan'}, 'value': 'Wiener'}});
  });it('append method must accept a paramater, or the appended node will be undefined', () => {
    let newList = new LinkedList();
    newList.add('Wiener');
    newList.add('Ryan');
    newList.append();
    expect(newList).toEqual( {'head': {'next': {'next': {'next': null, 'value': undefined}, 'value': 'Ryan'}, 'value': 'Wiener'}});
  });
  it('insertBefore method works as expected', () => {
    let newList = new LinkedList();
    newList.add('Wiener');
    newList.add('Ryan');
    newList.insertBefore('Ryan', 'dog');
    expect(newList).toEqual({'head': {'next': {'next': {'next': null, 'value': 'Ryan'}, 'value': 'dog'}, 'value': 'Wiener'}});
  });
  it('insertBefore method does not insert at end of list', () => {
    let newList = new LinkedList();
    newList.add('Wiener');
    newList.add('Ryan');
    newList.insertBefore('Ryan', 'dog');
    expect(newList).not.toEqual({'head': {'next': {'next': {'next': null, 'value': 'Ryan'}, 'value': 'Wiener'}, 'value': 'dog'}});
  });
  it('insertBefore method must accept 2 parameters', () => {
    let newList = new LinkedList();
    newList.add('Wiener');
    newList.add('Ryan');
    newList.insertBefore('Ryan');
    expect(newList).not.toEqual({'head': {'next': {'next': {'next': null, 'value': 'Ryan'}, 'value': 'dog'}, 'value': 'Wiener'}});
  });
  it('insertAfter method works as expected', () => {
    let newList = new LinkedList();
    newList.add('Ryan');
    newList.add('Amy');
    newList.insertAfter('Ryan', 'Wiener');
    expect(newList).toEqual({'head': {'next': {'next': {'next': null, 'value': 'Amy'}, 'value': 'Wiener'}, 'value': 'Ryan'}});
  });
  it('insertAfter methoddoes not insert at beginning of list', () => {
    let newList = new LinkedList();
    newList.add('Ryan');
    newList.add('Amy');
    newList.insertAfter('Ryan', 'Wiener');
    expect(newList).toEqual({'head': {'next': {'next': {'next': null, 'value': 'Amy'}, 'value': 'Wiener'}, 'value': 'Ryan'}});
  });
  it('insertAfter method must accept 2 parameters', () => {
    let newList = new LinkedList();
    newList.add('Ryan');
    newList.add('Amy');
    newList.insertAfter('Ryan');
    expect(newList).not.toEqual({'head': {'next': {'next': {'next': null, 'value': 'Amy'}, 'value': 'Wiener'}, 'value': 'Ryan'}});
  });

});

describe('Linked list, method from Code Challange-07', () =>{
  it('kthFromEnd method works as expected', () =>{
    let list = new LinkedList();
    list.add('Ryan');
    list.kthFromEnd(0);
    expect(list).toEqual({'head': {'next': null, 'value': 'Ryan'}});
  });
  it('kthFromEnd method must return a value included in list', () =>{
    let list = new LinkedList();
    list.add('Ryan');
    list.add('Amy');
    list.kthFromEnd(10);
    expect(list.kthFromEnd(10)).toBeFalsy();
  });
  it('kthFromEnd method cannot return results if list is empty', () =>{
    let list = new LinkedList();
    list.add();
    expect(list.kthFromEnd(0)).toBeFalsy();
  });

});