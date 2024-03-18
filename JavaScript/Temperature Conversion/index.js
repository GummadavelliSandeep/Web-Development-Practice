function convert() {
  const toFarenheit = document.getElementById("toFarenheit");
  const toCelius = document.getElementById("toCelius");
  let temp;
  if (toFarenheit.checked) {
    temp = document.getElementById("textbox").value;
    temp = (temp * 9) / 5 + 32;
    document.getElementById("result").textContent = temp.toFixed(1) + "°F";
  } else if (toCelius.checked) {
    temp = document.getElementById("textbox").value;
    temp = temp - 32 + 5 / 9;
    document.getElementById("result").textContent = temp.toFixed(1) + "°C";
  } else {
    document.getElementById("result").textContent = "Select a Unit";
  }
}
