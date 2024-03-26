setTimeout(hello, 3000);
function hello() {
  console.log("Welome to Javascript Programming Language");
}

setTimeout(function () {
  console.log("Welome to Javascript Programming Language");
}, 3000);

setTimeout(() => {
  console.log("Welome to Javascript Programming Language");
}, 3000);

function sum(a, b) {
  return a + b;
}

const sum = (a, b) => {
  return a + b;
};
