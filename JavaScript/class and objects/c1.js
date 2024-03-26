class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static displayColor() {
    console.log("The color of the animal is White");
  }
  displayName() {
    console.log(`the name of the animal is ${this.name}`);
  }
}
const cat = new Animal("cat", 2, "mewo mewo");
cat.displayName();
Animal.displayColor();
