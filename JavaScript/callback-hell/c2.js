function task1(callback) {
  setTimeout(function () {
    console.log("task 1");
    callback(); // Call the callback function here
  }, 1000);
}

function task2(callback) {
  setTimeout(function () {
    console.log("task 2");
    callback(); // Call the callback function here
  }, 1000);
}

function task3(callback) {
  setTimeout(function () {
    console.log("task 3");
    callback(); // Call the callback function here
  }, 1000);
}

function task4(callback) {
  setTimeout(function () {
    console.log("task 4");
    callback(); // Call the callback function here
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log("All tasks are completed"));
    });
  });
});
