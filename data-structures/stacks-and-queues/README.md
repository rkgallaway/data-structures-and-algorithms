# Stacks and Queues
Establishing node, stack and queue classes
## Challenge 10
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  * This object should be aware of a default null value assigned to top when the stack is created.
* Create a Queue class that has a front and back property. It creates an empty queue when instantiated.
  * This object should be aware of a default null value assigned to front when the queue is created.
## Approach & Efficiency
* Nodes added to stacks and queues one at a time for a total unknown quantity of nodes, therefore the  the Big O space/time for this approach is O(n).  

## API
#### Stack methods:
* Defines a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Defines a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node value.
* Defines a method called peek that does not take an argument and returns the value of the node located on the top of the stack
#### Queue methods
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node value.
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue.
