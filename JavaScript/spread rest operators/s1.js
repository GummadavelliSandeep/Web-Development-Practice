/*The spread operator is represented using three dots ...
 The spread operator was introduced in ECMAScript 2015 ES6
The spread operator simplifies code and makes it more readable by providing
 a concise syntax for common operations such as copying arrays, merging array*/

//  ... allows iterable such as arrays or strings to expanded into separate elements or individual elements[unpacks the elements]

// copying the singlw array
const arr = [2, 3, 4, 5, 6];
const copiedarr = [...arr];
console.log(copiedarr);

// copying to arrays
const arr1 = [2, 3, 4, 5, 6];
const arr2 = [2, 3, 4, 5, 6];
const copiedarr1 = [...arr1, ...arr2];
console.log(copiedarr1);

// Finding max element
const maxelement = Math.max(...arr1);
console.log(maxelement);

// Finding the min element
const minelement = Math.min(...arr1);
console.log(minelement);

// Separting string into characters
const str = "hello";
const str1 = [...str];
console.log(str1);

// Passing multiple arugments to function
function myFunction(...args) {
  console.log(args);
}
myFunction(1, 2, 3); // Output: [1, 2, 3]
