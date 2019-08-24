'use strict';

const HashTable = require('../../../401-archive/hashtable/hashtable.js');

function intersection(treeA, treeB) {
  let hashmap = new HashTable();
  let result = [];

  const _walk = node => {
    if(!hashmap.contains(node.value)){
      hashmap.add(node.value);
    }
    if(node.left){
      _walk(node.left);
    }
    if(node.right){
      _walk(node.right);
    }
  };

  const _walkCheck = node => {
    if(hashmap.contains(node.value)){
      result.push(node.value);
    }
    if(node.left){
      _walkCheck(node.left);
    }
    if(node.right){
      _walkCheck(node.right);
    }
  };

  _walk(treeA.root);
  _walkCheck(treeB.root);
  return result;
}


module.exports = intersection;