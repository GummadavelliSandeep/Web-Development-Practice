// switch (expression) {
//   case value1:
//     // Code to execute if expression matches value1
//     break;
//   case value2:
//     // Code to execute if expression matches value2
//     break;
//   // Additional cases...
//   default:
//   // Code to execute if expression does not match any case
// }

let day = new Date().getDay();
console.log(day);
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);
