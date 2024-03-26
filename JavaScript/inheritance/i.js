class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
}
class Rabbit extends Animal {
  name = "rabbit";
}
const rabbit = new Rabbit();
rabbit.eat();
rabbit.alive;
