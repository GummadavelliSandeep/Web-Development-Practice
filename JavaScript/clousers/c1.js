function outer() {
  //   let message = "Hello world";
  console.log(message);
  function inner() {
    console.log(message);
  }
  inner();
}
outer();
