function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  hours = hours % 12 || 12;
  const meridian = hours >= 12 ? "PM" : "AM";
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  document.getElementById(
    "clock"
  ).innerHTML = `${hours}:${minutes}:${seconds} ${meridian}`;
}
updateClock();
setInterval(updateClock, 100);
