function calculate(a, b, c, displayresult) {
  const result = a + b - c;
  displayresult(result);
}
function displayresult(result) {
  console.log(result);
}
calculate(2, 3, 4, displayresult);
