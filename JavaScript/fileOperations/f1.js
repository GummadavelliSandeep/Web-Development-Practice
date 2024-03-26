const fs = require("fs");
fs.readFile("f1.txt", function (err, data) {
  data = data + " copyright";
  fs.writeFile("f1.txt", data, function (err) {
    console.log("Done");
  });
});
