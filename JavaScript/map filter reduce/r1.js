// In javascript the map reduce method is used to reduce the elements of the array to single value
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((accumlator, element) => {
  return accumlator + element;
});
console.log(result);
