function sum(a, b, fincall) {
  const result = a + b;
  fincall(result);
}
function displayresult(result) {
  console.log("This is displaying the result:" + result);
}
function displaypassiveresult(result) {
  console.log("This is displaying the passive results:" + result);
}
sum(10, 15, displaypassiveresult);
