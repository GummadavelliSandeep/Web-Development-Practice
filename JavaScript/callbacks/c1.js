function sumsquare(a, b, callback) {
  const value1 = callback(a);
  const value2 = callback(b);
  return value1 + value2;
}
function square(a) {
  return a * a;
}
const result = sumsquare(2, 3, square);
console.log(result);
