// console.log("!");

//Function Declaration
// function greet(name) {
//   console.log("Hello - ", name);
// }
// greet("Dmytro");

// Function Expression
// const greet2 = function (name) {
//   console.log("2 Hello - ", name);
// };
// greet2("Dmytro");

// console.dir(greet);

// setTimeout(greet(), 1500);

// setTimeout(function () {
//   console.log("Timeout");
// }, 1500);

// setTimeout(function () {
//   greet("Dmytro 2");
// }, 1500);

// setInterval(function () {
//   console.log(Math.random());
// }, 2000);

// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// Arrow Function
// function greet(name) {
//   console.log("Hello - ", name);
// }
// greet("Dmytro");

// const arrow = (name, age) => {
//   console.log("Hello - ", name, age);
// };

// const arrow2 = (name) => console.log("Hello - ", name);

// arrow("Dmytro", 11);

// arrow2("Dmytro");

// function pow(num, exp) {
//   return Math.pow(num, exp);
// }

// const pow2 = Math.pow(2, 3);

// console.log(pow(2, 3));

// Default Parameters
// const sum = (a = 40, b = a / 2) => a + b;
// // console.log(sum(40, 2));
// console.log(sum());

// function sumAll(...numbers) {
  // let res = 0;
  // for (let num of numbers) {
  //   res += num;
  // }
  // return res;
//   return numbers.reduce((acc, cur) => (acc += cur), 0);
// }
// console.log(sumAll(1, 2, 3, 4, 5));

// Closures (замыкания)
// function createFunction(name) {
//   return function (lastname) {
//     console.log(name + " " + lastname);
//   };
// }
