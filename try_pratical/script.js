console.log("Hello World!");

var myBtn = document.getElementById("submit");

myBtn.addEventListener("click", () => {
  alert("hello world");
  prompt("enter the number");
});

/* 
width: 500px;
        height: 500px;
        border: 1px solid black;
        background-color: cornflowerblue;
        border-radius: 8px;
        color: white;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
*/

var myDiv = document.createElement("div");

// Step 2 -> Adding my css
myDiv.style.width = "500px";
myDiv.style.height = "500px";
myDiv.style.border = "1px solid black";
myDiv.style.backgroundColor = "cornflowerblue";
myDiv.style.color = "white";
myDiv.style.borderRadius = "8px";
myDiv.style.fontSize = "25px";
myDiv.style.display = "flex";
myDiv.style.alignItems = "center";
myDiv.style.justifyContent = "center";

// method 1
// myDiv.innerHTML = "Welcome to JS(JavaScript)"

// method 2
var content = "Welcome to JS(JavaScript)";
myDiv.innerHTML = `<h1>${content}</h1>`;

// Step 3 -> ithu ella na output yetthum varathu
// document.body.appendChild(myDiv);
