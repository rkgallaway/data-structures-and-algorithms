'use strict';

let Queue = require('../../data-structures/stacks-and-queues/queue.js');

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }
  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dog.enqueue(animal);
    }
    if (animal.species === 'cat') {
      this.cat.enqueue(animal);
    }
  }

  dequeue(preference) {
    if(preference === 'dog'){
      let adoptable =  this.dog.dequeue();
      return `Congratulations, meet your new ${adoptable.species}.  Their name is ${adoptable.name}`;
    }
    if(preference === 'cat'){
      let adoptable = this.cat.dequeue();
      return `Congratulations, meet your new ${adoptable.species}.  Their name is ${adoptable.name}`;
    } else {
      return null;
    }

    // if (preference !== 'dog' || preference !== 'cat') {
    //   return null;
    // }
    // if (preference === 'dog'){
    //   if (!this.dog.front) {
    //     return `no dogs avaialable, please try again soon!`;
    //   } 
    //   let adoptable = this.dog.dequeue();
    //   return `Congratulations, meet your new ${adoptable.species}.  Their name is ${adoptable.name}`;
    // }
    // if (preference === 'cat'){
    //   if (!this.cat.front) {
    //     return `no cats avaialable, please try again soon!`;
    //   } 
    //   let adoptable = this.cat.dequeue();
    //   return `Congratulations, meet your new ${adoptable.species}.  Their name is ${adoptable.name}`;
    // }

  }
}

module.exports = AnimalShelter;
