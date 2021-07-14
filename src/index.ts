import Person from './Person';

const person = new Person('Rossano', "D'angelo", 27);
console.log(person.introduceYourself());

const dog = {
  name: 'Pluto',
  breed: 'Labrador',
  owner: 'Rossano',
};

const cat = {
  name: 'Garfield',
  breed: 'Orange Cat',
  owner: 'Rossano',
};

console.log(`My dog's name is ${dog?.name}.`);
console.log(`My cat's name is ${cat?.name}.`);
