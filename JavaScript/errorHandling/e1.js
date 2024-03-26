let divided = 30;
let divisor = "hello";
let result;
if (isNaN(divided) || isNaN(divisor)) {
  throw new Error("Should be of numbers");
}
if (divisor == 0) {
  throw new Error("Should be greater than zero");
}
try {
  result = divided / divisor;
} catch (error) {
  console.log(error);
}
