// const arr = [2, 3, 4, 5, 5, 6];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * 2);
// }
// console.log(result);
// function tranform(i) {
//   return i * 2;
// }

// const arr = [2, 3, 4, 5, 5, 6];
// const result = arr.map(tranform);
// console.log(result);

// const arr = [2, 3, 4, 5, 5, 6];
// const result = arr.map(function (Element) {
//   return Element * 2;
// });
// console.log(result);

const arr = [2, 3, 4, 5, 5, 6];
const result = arr.map((Element) => {
  return Element * 2;
});
console.log(result);

/*Purpose: The map method transforms each element of an array using a provided function and returns 
a new array with the transformed elements, without modifying the original array*/
