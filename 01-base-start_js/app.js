let num = 42;
let firstName = "Dmytro";
const isProgrammer = true;

// Can do
// let $ = 'test'
// let $num = 'test'
// let num$ = 'test'

// let _ = 49
// let _num = 49
// let num_ = 51 let first_name = "Elena"
// let myNum = 34 // Good
// let num42 = 10

// Restricted
// let 42num = '11'
// let my-num = 1

firstName = "Dima";
isProgrammer = false; // error because of const
alert(firstName);
console.log("Test:", firstName);
console.log("Test:", num);

console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);
console.log(num);

let num2 = num + 10;
console.log(num, num2);
num = num2 - num;
console.log(num, num2);
num2 = num2 + 1;
console.log(num, num2);

// let num3 = (num + 10 * 2) / (3 - 1)
// console.log(num3)
// let num3 = (num + 2);
// const fullname = firstName + ' Ostapenko'
// const fullname = firstName + ' ' + 'Ostapenko'
// console.log(fullname)

console.log(resultElement.textContent);
resultElement.textContent = 42;
resultElement.textContent = (42 - 2) / 7;

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";
console.log(input2.value);

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;

console.log(typeof sum);

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  console.log("Result to print ", result);
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = +inp1.value;
  const num2 = +inp2.value;
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  }
  console.log(typeof num1, typeof num2);
  const res = actionSymbol == "+" ? num1 + num2 : num1 - num2;
  return res;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  console.log("Hello Click!");
  if (action == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    printResult(sum);
  } else if (action == "-") {
    const sum = Number(input1.value) - Number(input2.value);
    printResult(sum);
  }
};
