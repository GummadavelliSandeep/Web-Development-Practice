function calculate(a, b, type) {
  if (type == "sum") {
    return a + b;
  }
  if (type == "minus") {
    return a - b;
  }
}
const result = calculate(6, 3, "minus");
console.log(result);
function calculate1(a, b, type) {
  if (type == "sum") {
    const result1 = sum(a, b);
  }
  if (type == "minus") {
    const result = minus(a, b);
  }
}
function sum(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
const result1 = calculate(6, 3, "minus");
console.log(result1);
