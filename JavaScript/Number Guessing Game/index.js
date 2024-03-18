const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attempts = 0;

function guessNumber() {
  let guess = Number(document.getElementById("textbox").value);

  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    document.getElementById("result").textContent =
      "Please Enter a Valid Number Between 1 and 100.";
  } else {
    attempts++;
    document.getElementById("attempts").textContent = attempts;
    if (guess < answer) {
      document.getElementById("result").textContent = "Too Low! Try Again";
    } else if (guess > answer) {
      document.getElementById("result").textContent = "Too High! Try Again";
    } else {
      document.getElementById(
        "result"
      ).textContent = `Correct! The answer is ${answer}. It took ${attempts} attempts to guess.`;
    }
  }
}
