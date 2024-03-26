function calcualatevalue(callback) {
  callback("hi there!");
}
function main() {
  calcualatevalue(callback);
}
function callback(value) {
  console.log(value);
}
function main1() {
  calcualatevalue(function (value) {
    console.log(value);
  });
}

main();
main1();
