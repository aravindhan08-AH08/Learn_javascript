const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultDiv = document.getElementById("result");

num1.addEventListener("input", restrictInput);
num2.addEventListener("input", restrictInput);

function restrictInput(e) {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
}

function isValid(value) {
    return value !== "" && !isNaN(value);
}

function calculate(operation) {
    let n1 = num1.value;
    let n2 = num2.value;

    if (!isValid(n1) || !isValid(n2)) {
        alert("Numbers Only Enter Not String");
        return;
    }

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    let result;

    switch (operation) {
        case "add":
            result = n1 + n2;
            break;

        case "sub":
            result = n1 - n2;
            break;

        case "mul":
            result = n1 * n2;
            break;

        case "div":
            if (n2 == 0) {
                alert("Division by zero not allowed");
                return;
            }
            result = n1 / n2;
            break;
    }

    resultDiv.innerText = "Result: " + result;
}