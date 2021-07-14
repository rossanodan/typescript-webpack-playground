import axios from 'axios';

import Person from './Person';
import Singer from './Singer';

const person = new Person('Rossano', "D'angelo", 27);
// console.log(person.introduceYourself());

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

// console.log(`My dog's name is ${dog?.name}.`);
// console.log(`My cat's name is ${cat?.name}.`);

const singer = new Singer('Ed', 'Sheeran', 30, true);
// console.log(singer.introduceYourself());
singer.addSong('Photograph');
singer.addSong('Castle on the Hill');
singer.addSong('Sing');
// console.log(singer.listSongs());

const fetchTodos = () => {
  axios
    .get('https://api.github.com/users/mapbox')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      // TODO: Error ReferenceError: XMLHttpRequest is not defined
      console.log(`Error ${error}`);
    });
};

fetchTodos();
