const fs = require("fs");
fs.readFile("asyn.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("Hi there 1");
let a = 0;
for (let i = 0; i < 10000000; i++) {
  a += i;
}
console.log(a);
console.log("Hi there 2");
