const startBtn = document.getElementById("startBtn");
const timeInput = document.getElementById("timeInput");
const display = document.getElementById("display");

let timerId;

startBtn.addEventListener("click", () => {
  let time = Number(timeInput.value);

  if (time <= 0) {
    alert("Please enter valid Time!!");
    return;
  }
  
  display.innerText = `Time Left: ${time} seconds`;

  timerId = setInterval(() => {
    time = time - 1;
    display.innerText = `Time Left: ${time} seconds`;

    if (time == 0) {
      clearInterval(timerId);
      alert("Time's up!!!");
      display.innerText = "Time Finished";
    }
  }, 1000);
});
