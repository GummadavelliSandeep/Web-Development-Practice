// wrapping the another asyn function
function myownfunction(fn, duration) {
  setTimeout(fn, duration);
}
myownfunction(function () {
  console.log("log the first thing");
  myownfunction(function () {
    console.log("log the second thing");
  }, 2000);
}, 1000);

//Using the setTimeout async function
// Which leads to the callback hell

setTimeout(function () {
  console.log("This is first log");
  setTimeout(function () {
    console.log("This is second log");
  }, 5000);
}, 4000);
