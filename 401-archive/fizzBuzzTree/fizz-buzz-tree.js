'use strict';

function FizzBuzzTree(tree){
  if(!tree.root){
    return;
  }

  function recursivePostOrderTraversal(node){
    if(node.value % 3 === 0 && node.value % 5 === 0 && node.value){
      node.value = 'FizzBuzz';
    }
    if(node.value % 3 === 0 && node.value){
      node.value = 'Fizz';
    }
    if(node.value % 5 === 0 && node.value){
      node.value = 'Buzz';
    }
    if(node.left){
      recursivePostOrderTraversal(node.left);
    }
    if(node.right){
      recursivePostOrderTraversal(node.right);
    }
  }

  recursivePostOrderTraversal(tree.root);
}

module.exports = FizzBuzzTree;

