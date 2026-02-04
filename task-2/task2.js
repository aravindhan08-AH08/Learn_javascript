var myBtn = document.getElementById("submit-btn");
var userInput = document.getElementById("div");

myBtn.addEventListener("click", () => {
  let sentence = userInput.value;

  let words = userInput.split(",");
  console.log(words);

  for (let i = 0; i < words.length; i = i + 1) {
    let div = document.createElement("div");
    
    div.style.border = "1px solid black";
    div.style.borderRadius = "8px";
    div.style.padding = "10px";

    div.innerText = words[i];

    myContainer.appendChild
  }
});