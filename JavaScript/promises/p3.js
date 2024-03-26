function sandeepsAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there!");
    }, 1000);
    // resolve("hi there!");
  });
  return p;
}

async function main1() {
  let value = sandeepsAsyncFunction();
  //   here we'll get the output as promise{<pending>}
  //   the reason for getting the output as above is we have not used the await keyword when calling the sandeepsAsyncFunction
  // Get rid of writing the .then syntax for loging the output value why because it is very diffuclt to understand and looks so ugly
  console.log(value);
}
main1();

async function main2() {
  let value =
    await sandeepsAsyncFunction(); /*The person one who is calling these function that function must be in async function */
  //   no callbacks,no .then syntax
  //   Writing await is very important to get the resolved value.if we forget to write the await infront of function call then it's going to return the promise itself
  //   The controll will not go beyond it untill it completes it executions/Task
  //   If a function is returning the promise we need to put await infront of it to wait the promise to get settled (resolved,rejected)
  //   It will wait for the await call function to complete and once it gets completed with it then it going to log "Hi There!" followed by
  //   log(value)
  //   It will wait there until it gets completes beacuse the value is going to be used in next lines of code
  console.log("Hello There!");
  console.log(value);
}
main2();

function main3() {
  sandeepsAsyncFunction().then(function (value) {
    console.log(value);
  });
  console.log("Hello There!");
  //   here first it log the value"Hello There! and followed by once the sandeepssAsyncFunction is done with it completion then it return the value as "hi there!"
}
main3();
