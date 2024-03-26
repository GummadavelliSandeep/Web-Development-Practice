/* extract values from array and objects
then assigns them to variables in a convenient way
[]=to perform the array destructuring
{}=to perform the object destructuring*/
// 1.swaping of two numbers
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a + " " + b);

// 2.swap 2 array elements
const arr = ["green", "blue", "red", "yellow", "white", "purple"];
[arr[0], arr[5]] = [arr[5], arr[0]];
console.log(arr);

// 3.Assign array elements to variable
[firstcolor, secondcolor, thirdcolor, fourthcolor, ...extrcolors] = arr;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(fourthcolor);
console.log(extrcolors);

//4.extract values from object

const person1 = {
  firstname: "sandeep",
  lastname: "Gummadavelli",
  age: 30,
};
const { firstname, lastname, age, job = "software engineer" } = person1;
console.log(job);
// 5.destructure in function parameters
function displaydetails({ firstname, lastname, age, job }) {
  console.log(firstname);
  console.log(age);
}
displaydetails(person1);
