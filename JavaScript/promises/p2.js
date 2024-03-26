const { promises } = require("dns");
const fs = require("fs");
function Promisess() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
// The below function is callback funtion of promisess().then(onDone)
function onDone(data) {
  console.log(data);
}
Promisess().then(onDone);
// The Below lines of code is anonomyomus function.i,e the function without the function name
Promisess().then(function (value) {
  console.log(value);
});
// The Below lines of code with the fucntion as the funtion name in it
Promisess().then(function resolve(data) {
  console.log(data);
});
