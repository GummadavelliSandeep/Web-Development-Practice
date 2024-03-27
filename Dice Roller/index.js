function DiceRoll() {
  const DicNumber = document.getElementById("txt-box").value;
  const dicNumbs = document.getElementById("diceNumbers");
  const dicimgs = document.getElementById("diceImages");
  const values = [];
  const images = [];
  for (let i = 0; i < DicNumber; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/dice${value}.png">`);
  }
  dicNumbs.textContent = `Dice: ${values.join(", ")}`;
  dicimgs.innerHTML = images.join(" ");
}
