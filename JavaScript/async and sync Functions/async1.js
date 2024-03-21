function findsum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
function addupto100() {
  console.log(findsum(100));
}
setTimeout(addupto100);
// setTimeout is an global premade/predefined async function in javscript
console.log("hello world");
