let count = 0;
function increasebtn() {
  count++;
  document.getElementById("labelcnt").innerHTML = count;
}
function decreasebtn() {
  count--;
  document.getElementById("labelcnt").innerHTML = count;
}
function resetbtn() {
  count = 0;
  document.getElementById("labelcnt").innerHTML = count;
}
