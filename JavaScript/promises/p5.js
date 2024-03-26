function promise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hello everyone, I'm done for today");
    }, 1000);
  });
}
// After promise is done
// .then is is like call back after done with promise run this
// async await or promise chaining both of them will get rid of => callback hell
promise().then(function (value) {
  console.log(value);
});
