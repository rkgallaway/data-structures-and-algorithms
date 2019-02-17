'use strict';

class Node{
  constructor(value){
    this.value = value;
  }
}

class Graph{
  constructor(){
    this.nodeCount = 0;
    this.adjacencyList = new Map();
  }

  addNode(value){
    let node = new Node(value);
    this.adjacencyList.set(node, new Map());
    this.nodeCount++;
    return node;
  }

  addEdge(startNode, endNode, weight = 0){
    if (!this.adjacencyList.has(startNode) || !this.adjacencyList.has(endNode))
      throw new Error ('Error: invalid node(s)');

    let adjacencies = this.adjacencyList.get(startNode);

    adjacencies.push({
      node: endNode,
      weight,
    });
  }

  getNodes(){
    return this.adjacencyList;
  }

  getNeighbors(node){
    if (!this.adjacencyList.has(node))
      throw new Error ('error: invalid node');

    return [...this.adjacencyList.get(node)];
  }

  size(){
    return this.nodeCount;
  }
}

module.exports = {
  Graph,
  Node,
};
