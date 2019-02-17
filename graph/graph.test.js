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
});