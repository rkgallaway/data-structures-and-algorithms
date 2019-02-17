'use strict';

const Node = require('./graph.js').Node;
const Graph = require('./graph.js').Graph;

describe ('Node Class', () => {
  it( 'instantiates a node with no paramaters', () => {
    let newNode = new Node ();
    expect(newNode).toBeInstanceOf(Node);
    expect(newNode.value).toBe(undefined);
  });
  it( 'instantiates a node with a paramater', () => {
    let newNode = new Node (1);
    expect(newNode).toBeInstanceOf(Node);
    expect(newNode.value).toEqual(1);
  });
});

describe ('Graph Class', () =>{
  describe ('constructor test:', () => {
    it ('instantiates a new Graph', () => {
      let newGraph = new Graph();
      expect (newGraph).toBeInstanceOf(Graph);
    });
  });
  describe ('addNode tests', () =>{
    it('increments size on add', ()=>{
      let newGraph = new Graph();
      expect(newGraph.size()).toEqual(0);
      newGraph.addNode(2);
      expect(newGraph.size()).toEqual(1);
    });  
  });
  describe ('Breadth First Traversal Tests:', () =>{
    it ('Return nodes visited in order', () =>{
      let graph = new Graph();
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addNode(4);
      graph.addNode(5);
      graph.addNode(6);
      graph.addEdge(1, 2);
      graph.addEdge(2, 3);
      graph.addEdge(2, 4);
      graph.addEdge(3, 5);
      graph.addEdge(3, 6);
      graph.addEdge(3, 4);
      graph.addEdge(4, 6);
      graph.addEdge(5, 6);
      expect(graph.breadthFirst(1)).toBeInstanceOf(Set);
      expect(graph.breadthFirst(1)).toContain(1, 2, 3, 4, 5, 6);
    });
    it ('Return nodes of varying content visited in order', () =>{
      let graph = new Graph();
      graph.addNode(1);
      graph.addNode('bananas');
      graph.addNode(3);
      graph.addNode(4);
      graph.addNode(5);
      graph.addNode(6);
      graph.addEdge(1, 'bananas');
      graph.addEdge('bananas', 3);
      graph.addEdge('bananas', 4);
      graph.addEdge(3, 5);
      graph.addEdge(3, 6);
      graph.addEdge(3, 4);
      graph.addEdge(4, 6);
      graph.addEdge(5, 6);
      expect(graph.breadthFirst(1)).toBeInstanceOf(Set);
      expect(graph.breadthFirst(1)).toContain(1, 'bananas', 3, 4, 5, 6);
    });
    it('returns null if there are no nodes in the graph', () => {
      let graph = new Graph();
      expect(graph.breadthFirst()).toBeNull();
    });
  });

});