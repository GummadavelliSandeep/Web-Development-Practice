const { promises } = require("dns");
const fs = require("fs");
function Promisess(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}
function onDone(data) {
  console.log(data);
}
Promisess(onDone);
