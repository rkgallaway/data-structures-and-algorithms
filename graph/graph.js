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
      return 'Error: invalid node(s)';

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
      return 'Error: invalid node';

    return [...this.adjacencyList.get(node)];
  }

  size(){
    return this.nodeCount;
  }

  breadthFirst(startNode) {
    let queue = [];
    let visitedNodes = new Set();

    queue.unshift(startNode);
    visitedNodes.add(startNode);

    if(this.nodeCount === 0){
      return null;
    }
 
    while(queue.length){
      let currentNode = queue.pop();
      visitedNodes.add(currentNode);

      let neighbors = this.getNeighbors(currentNode);

      for(let neighbor of neighbors){
        let neighborNode = neighbor.node;

        if(visitedNodes.has(neighborNode))
          continue;
        else
          visitedNodes.add(neighborNode);

        queue.unshift(neighborNode);
      }
    }
    return visitedNodes;
  }
}

module.exports = {
  Graph,
  Node,
};
