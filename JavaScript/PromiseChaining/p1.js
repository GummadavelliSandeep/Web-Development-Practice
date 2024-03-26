function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("task 1");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("task 2");
      resolve();
    }, 1000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("task 3");
      resolve();
    }, 1000);
  });
}

function task4() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("task 4");
      resolve();
    }, 1000);
  });
}

task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => {
    console.log("All tasks are completed");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
