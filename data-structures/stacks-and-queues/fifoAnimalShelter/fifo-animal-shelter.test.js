'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');

describe('animal shelter', () => {
  it('Can successfully instantiate an empty Animal SHelter', () => {
    let shelter = new AnimalShelter();
    expect(shelter instanceof AnimalShelter).toBeTruthy();
  });
  it('Can correctly accept a cat', () => {
    let shelter = new AnimalShelter();

    let felix = {
      species: 'cat',
      name: 'Felix'
    };

    shelter.enqueue(felix);

    expect(shelter.cat.front.value).toEqual(felix);
    expect(shelter.dog.front).toBeNull();
  });

  it('Can correctly accept multiple cats', () => {
    let shelter = new AnimalShelter();

    let felix = {
      species: 'cat',
      name: 'Felix'
    };
    let sativa = {
      species: 'cat',
      name: 'Sativa'
    };
    let angel = {
      species: 'cat',
      name: 'Angel'
    };

    shelter.enqueue(felix);
    shelter.enqueue(sativa);
    shelter.enqueue(angel);

    expect(shelter.cat.front.value).toEqual(felix);
    expect(shelter.cat.front.next.value).toEqual(sativa);
    expect(shelter.cat.front.next.next.value).toEqual(angel);
    expect(shelter.dog.front).toBeNull();
  });

  it('Can correctly accept a dog', () => {
    let shelter = new AnimalShelter();

    let wiener = {
      species: 'dog',
      name: 'Wiener'
    };

    shelter.enqueue(wiener);

    expect(shelter.cat.front).toBeNull();
    expect(shelter.dog.front.value).toEqual(wiener);
  });

  it('Can correctly accept multiple dogs', () => {
    let shelter = new AnimalShelter();

    let wiener = {
      species: 'dog',
      name: 'Wiener'
    };
    let diva = {
      species: 'dog',
      name: 'Diva'
    };
    let casey = {
      species: 'dog',
      name: 'Casey'
    };

    shelter.enqueue(wiener);
    shelter.enqueue(diva);
    shelter.enqueue(casey);

    expect(shelter.dog.front.value).toEqual(wiener);
    expect(shelter.dog.front.next.value).toEqual(diva);
    expect(shelter.dog.front.next.next.value).toEqual(casey);
    expect(shelter.cat.front).toBeNull();
  });

  it('Requires cat or dog preference to dequeue', () => {
    let shelter = new AnimalShelter();
    expect(shelter.dequeue('rabbit')).toBeNull();
  });

  it('Can dequeue cats as expected', () => {
    let shelter = new AnimalShelter();

    let felix = {
      species: 'cat',
      name: 'Felix'
    };
    let sativa = {
      species: 'cat',
      name: 'Sativa'
    };
    let angel = {
      species: 'cat',
      name: 'Angel'
    };

    shelter.enqueue(felix);
    shelter.enqueue(sativa);
    shelter.enqueue(angel);

    let expectedOne = shelter.dequeue('cat');
    let expectedTwo = shelter.dequeue('cat');
    let expectedThree = shelter.dequeue('cat');
    let resultOne = `Congratulations, meet your new cat.  Their name is Felix`;
    let resultTwo = `Congratulations, meet your new cat.  Their name is Sativa`;
    let resultThree = `Congratulations, meet your new cat.  Their name is Angel`;

    expect(expectedOne).toEqual(resultOne);
    expect(expectedTwo).toEqual(resultTwo);
    expect(expectedThree).toEqual(resultThree);
  });

});
