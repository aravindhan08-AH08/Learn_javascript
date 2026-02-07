let value = 15;

let valueE1 = document.getElementById("value");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let resetBtn = document.getElementById("reset");
let stepInput = document.getElementById("step");

function updateValue() {
    valueE1.innerText = value;
}

plusBtn.onclick = function () {
    var step = Number(stepInput.value);
    value = value + step;
    valueE1.innerText = value;
};

minusBtn.onclick = function () {
    var step = Number(stepInput.value);
    value = value - step;
    valueE1.innerText = value;
};

resetBtn.onclick = function () {
    value = 0;
    valueE1.innerText = value;
}   