'use strict';

const repeatedWord = require('./repeated-word.js');

describe('Repeated word tests', () => {
  it('can handle a string of one word / no repeated words', () => {
    let str = 'string';
    expect(repeatedWord(str)).toEqual('no duplicate words found');
  });
  it('can handle a string with repeated word', () => {
    let str = 'string has string';
    expect(repeatedWord(str)).toEqual('string');
  });
  it('can handle a string with multiple repeated words', () => {
    let str = 'string has string it has';
    expect(repeatedWord(str)).toEqual('string');
  });

});