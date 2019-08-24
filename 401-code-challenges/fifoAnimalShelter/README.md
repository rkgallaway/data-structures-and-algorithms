# Challenge Summary
Code Challenge 12 - First-in, First out Animal Shelter, paired with Heather Cherewaty.
## Challenge Description
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.  Animal objects are enqueued and dequeued based on preference of cat or dog.
## Approach & Efficiency
The AnimalShelter class uses both a cat queue and a dog queue to store animal objects, returning the front value when a cat or dog dequeue request is made.
*  The Big O operation in time is 0(1) for both enqueue and dequeue because no matter how many other nodes are in the stack, adding to the end or taking from the fornt requires the same amount of time to perform.
## Solution
![whiteboard image](assets/fifo-animal-shelter.jpg);