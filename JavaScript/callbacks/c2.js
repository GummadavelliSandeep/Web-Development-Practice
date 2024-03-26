function square(a) {
  return a * a;
}
function cube(a) {
  return a * a * a;
}
function sumsquare(a, b) {
  const value1 = square(a);
  const value2 = square(b);
  return value1 + value2;
}
function sumcube(a, b) {
  const value1 = cube(a);
  const value2 = cube(b);
  return value1 + value2;
}
function sumsomething(a, b, fn) {
  const value1 = fn(a);
  const value2 = fn(b);
  return value1 + value2;
}
const result = sumsquare(2, 3);
console.log(result);
const result1 = sumcube(2, 3);
console.log(result1);
const result2 = sumsomething(2, 3, square);
console.log(result2);
// DRY DON'T REPEAT YOURSELF,i,e we are repeating the code here
// code repeation
// To avoid these function call backs will come into pitcure
