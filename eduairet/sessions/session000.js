let day = "friday";

switch (day) {
  case "monday":
    console.log("Chulear");
    break;
  case "tuesday":
    console.log("Drink");
    break;
  case "wednesday":
    console.log("Sweat");
    break;
  case "thursday":
  case "friday":
    console.log("Move");
    break;
  case "saturday":
    console.log("dance");
    break;
  case "sunday":
    console.log("rest");
    break;
  default:
    console.log("Not a day!");
}

if (day === "monday") {
  console.log("Chulear");
} else if (day === "tuesday") {
  console.log("Drink");
} else if (day === "wednesday") {
  console.log("Sweat");
} else if (day === "thursday" || day === "friday") {
  console.log("Move");
} else if (day === "saturday") {
  console.log("dance");
} else if (day === "sunday") {
  console.log("rest");
} else {
  console.log("Not a day!");
}
