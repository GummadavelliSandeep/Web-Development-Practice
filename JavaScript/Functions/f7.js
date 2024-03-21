function calculatesum(a, b, calcu) {
  const result = calcu(a, b);
  console.log(result);
}
function sum(a, b) {
  return a + b;
}
calculatesum(3, 5, sum);
