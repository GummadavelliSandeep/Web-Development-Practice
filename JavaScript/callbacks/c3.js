function sumsquare(a, b, callback) {
  callback(a);
  callback(b);
}

const result = sumsquare(2, 3, function (a, b) {
  let result = a * a;
  console.log(result);
});
