'use strict';

let Queue = require('../queue.js');

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
    if (preference !== 'dog' || preference !== 'cat') {
      return null;
    }
    if (!this.perference.front) {
      return `no ${preference}s avaialable, please try again soon!`;
    } else {
      let adoptable = preference.dequeue();
      return `Congratulations, meet your new ${adoptable.species}.  Their name is ${adoptable.name}`;
    }
  }
}

module.exports = AnimalShelter;
