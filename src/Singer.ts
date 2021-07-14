import Person from './Person';
import Song from './Song';

class Singer extends Person {
  wonGrammy: boolean;
  songs: Song[];

  constructor(name: string, lastname: string, age: number, wonGrammy: boolean) {
    super(name, lastname, age);
    this.wonGrammy = wonGrammy;
    this.songs = [];
  }

  introduceYourself = (): string => {
    if (this.wonGrammy) {
      return `Hi, I am ${this.name} ${this.lastname} and I won the Grammy Award!`;
    }
    return `Hi, I am ${this.name} ${this.lastname}`;
  };

  addSong = (title: string): Song[] => {
    const song = new Song(title);
    this.songs.push(song);
    return this.songs;
  };

  listSongs = (): string => {
    const songs = this.songs.map((song) => song.title);
    return `These are some of the songs I wrote: ${songs.join(', ')}`;
  };
}

export default Singer;
