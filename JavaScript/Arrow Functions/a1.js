//Declarative function-->function expressions-->arrow functions
/*arrow functions — a concise way to write function expressions 
good for simple functions that you use only once
(parameters) some code*/
function hello() {
  console.log("This is Declarative function Block of code");
}
hello();

const displayresult = function () {
  console.log("This is function expression Block of code");
};
displayresult();

const result = () => {
  console.log("This is arrow function block of code");
};
result();
