'use strict';
let Queue = require('../../stacks-and-queues/stacks-and-queues.js').Queue;
class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();  
    this.counter = 0;
  }
  enQ(animal) {
    if (animal.species === 'dog') {
      animal.value = this.counter;
      this.dog.enqueue(animal);
      this.counter++;
    }
    if (animal.species === 'cat') {
      animal.value = this.counter;
      this.cat.enqueue(animal);
      this.counter++;
    }
  }
  deQ(preference) {
    if(!this.dog.front) {
      return 'no dogs';
    }
    if(!this.cat.front) {
      return 'no cats';
    } else {
      return[preference].dequeue(); 
    }
  }
}
module.exports = AnimalShelter;
