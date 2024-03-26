function createGame() {
  let score = 0;
  function increase(points) {
    score += points;
    console.log(`the increase points are +${score}pts`);
  }
  function decrease(points) {
    score -= points;
    console.log(`the decrease points are -${score}pts`);
  }
  function getscore() {
    return score;
  }
  return { increase, decrease, getscore };
}
const game = createGame();
game.increase(5);
game.increase(6);
game.decrease(3);
console.log(`the final score ${getscore()}pts`);
