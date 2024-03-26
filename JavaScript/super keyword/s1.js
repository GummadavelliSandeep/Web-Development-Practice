class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
const rabbit = new Rabbit("abc", 21, 30);
console.log(rabbit.name);
console.log(rabbit.age);
