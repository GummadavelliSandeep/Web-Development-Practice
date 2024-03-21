arrayelements = [1, 3, 4, 5, 6];
secondelements = [9, 8, 9, 0];
arrayelements.push(2);
arrayelements.pop();
arrayelements.unshift(2);
arrayelements.shift();
arrayelements.sort();
// console.log(arrayelements);
console.log(arrayelements.concat(secondelements));
for (let i = 0; i < arrayelements.length; i++) {
  console.log(arrayelements[i]);
}
arrayelements.forEach((element) => {
  console.log(element);
});
