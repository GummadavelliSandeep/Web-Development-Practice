setTimeout(function () {
  console.log("Hello everyone");
}, 1000);

// Diffference between .then and async function

setTimeout(1000).then(function () {
  console.log("Hello everyone");
});
