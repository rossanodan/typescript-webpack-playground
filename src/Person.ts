class Person {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  introduceYourself = (): string =>
    `Hi, my name is ${this.name} and I am ${this.age} years old.`;
}

export default Person;
