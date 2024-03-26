// what if i tell u, given an input array give all the even values of the array.
// for this we are going to apply the filter method to the array to extract the elements based on the condition that we are going to provide
const arr = [2, 3, 4, 5, 5, 6];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

const result = arr.filter((Element) => {
  return Element % 2 == 0;
});
console.log(result);
