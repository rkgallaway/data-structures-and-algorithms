'use strict';

class BinaryTree {
  constrcutor(){
    this.root = null;
  }

  preOrder (){
    const nodes = [];

    const _walk = node => {
      nodes.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return nodes;
  }

  inOrder (){
    const nodes = [];

    const _walk = node => {
      if(node.left) _walk(node.left);
      nodes.push(node.value);
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return nodes;
  }

  postOrder (){
    const nodes = [];

    const _walk = node => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      nodes.push(node.value);
    };

    _walk(this.root);
    return nodes;
  }

  breadthFirst(){
    let nodes = [];
    let queue = [];
    queue.push(this.root);

    while(queue.length){
      let current = queue.shift();
      nodes.push(current.value);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return nodes;
  }



}

module.exports = BinaryTree;