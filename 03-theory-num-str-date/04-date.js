// console.log('!');
// console.log(new Date());

// const now = new Date();
// const start = new Date(0);
// const start2 = new Date(1000 * 60 * 60 * 24 * 365);
// const date = new Date(2011, 0, 4, 12, 42);
// console.log(date.);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//===========================================================

// let mode = "time";
// const output = document.getElementById("output");
// const fullBtn = document.getElementById("full");
// const dateBtn = document.getElementById("date");
// const timeBtn = document.getElementById("time");

// function bindMode(name) {
//   return function () {
//     mode = name;
//     update();
//   };
// }

// fullBtn.onclick = bindMode("full");
// dateBtn.onclick = bindMode("date");
// timeBtn.onclick = bindMode("time");

// setInterval(update, 1000);
// update();

// function update() {
//   output.textContent = format(mode);
// }

// // Pure Function
// function format(formatMode) {
//   const now = new Date();
//   switch (formatMode) {
//     case "time":
//       return now.toLocaleTimeString() + "." + now.getMilliseconds();
//     case "date":
//       return now.toLocaleDateString();
//     case "full":
//       return now.toLocaleDateString() + " " + now.toLocaleTimeString();
//     default:
//       return now.toLocaleTimeString();
//   }
// }