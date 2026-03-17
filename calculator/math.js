export function add(a,b) {
    return a + b;
}

export function subtract(a,b) {
    return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Default export
export default function logResult(result) {
  console.log("Logged Result:", result);
}