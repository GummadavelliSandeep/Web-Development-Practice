function dateMethods() {
  var currentDate = new Date();
  // getting various components of the date
  console.log(currentDate);
  console.log("date", currentDate.getDate());
  console.log("month", currentDate.getMonth() + 1);
  //   months are zero based so adding 1 to .getMonth()
  console.log("year", currentDate.getFullYear());
  console.log("hours", currentDate.getHours());
  console.log("minutes", currentDate.getMinutes());
  console.log("seconds", currentDate.getSeconds());
  //   setting various components of the date
  currentDate.setFullYear(2022);
  console.log("After the setting the full year", currentDate);
  currentDate.setMonth(5);
  console.log("After setting the month", currentDate);
}

dateMethods();
