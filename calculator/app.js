import logResult, { add, subtract, multiply, divide } from './math.js';

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");
const button = document.getElementById("calculate");

button.addEventListener("click", () => {
  const a = num1.value;
  const b = num2.value;

  // 🔴 Empty input check
  if (a === "" || b === "") {
    result.textContent = "Please enter both numbers";
    return;
  }

  const n1 = parseFloat(a);
  const n2 = parseFloat(b);
  const op = operator.value;

  let output;

  // 🧠 Clean switch logic
  switch (op) {
    case "+":
      output = add(n1, n2);
      break;

    case "-":
      output = subtract(n1, n2);
      break;

    case "*":
      output = multiply(n1, n2);
      break;

    case "/":
      if (n2 === 0) {
        output = "Cannot divide by zero";
      } else {
        output = divide(n1, n2);
      }
      break;

    default:
      output = "Invalid operator";
  }

  // 🟢 Show result
  result.textContent = "Result: " + output;

  // 🟣 Default function call
  logResult(output);
});