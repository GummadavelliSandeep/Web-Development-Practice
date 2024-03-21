function findsubstring(str) {
  const result = str.substr(2, 5);
  const sliceresult = str.slice(2, 5);
  console.log(result + " " + sliceresult);
}
findsubstring("HelloWelcome to Javascript Programming");
