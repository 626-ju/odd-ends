const counterMain = document.querySelector("#CounterMain");
const countingNow = counterMain.querySelector("#CountingNow");

const button = counterMain.querySelector(".btns");

const decrease = button.querySelector("#decrease");
const reset = button.querySelector("#reset");
const increase = button.querySelector("#increase");

let countNumber = 0;
if (localStorage.getItem("countNumber") !== null) {
  countNumber = localStorage.getItem("countNumber");
  countingNow.style.color = localStorage.getItem("color");
}
countingNow.innerText = countNumber;

decrease.addEventListener("click", doDecrease);
reset.addEventListener("click", doReset);
increase.addEventListener("click", doIncrease);






function doDecrease() {
  countNumber--;

  countingNow.innerText = countNumber;
  countingNow.style.color = "red";
  saveNumber();
}

function doReset() {
  countNumber = 0;

  countingNow.innerText = countNumber;
  countingNow.style.color = "black";
  saveNumber();
}

function doIncrease() {
  countNumber++;

  countingNow.innerText = countNumber;
  countingNow.style.color = "green";
  saveNumber();
}

function saveNumber() {
  localStorage.setItem("countNumber", countNumber);
  localStorage.setItem("color", countingNow.style.color);
}
