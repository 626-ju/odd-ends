const maxNumberPart = document.querySelector(".maxNumberPart");
const choseNumberPart = document.querySelector(".choseNumberPart");

let maxNumber = 0;
let machineChose = 0;
let userChoseNumber = 0;

const functionObj = {
  setMaxNumber: function () {
    maxNumber = maxNumberPart.querySelector("input").value;
  },

  setMachineChoseNumber: function () {
    machineChose = Math.ceil(Math.random() * maxNumber);
  },

  showingResult: function () {
    if (machineChose === parseInt(userChoseNumber)) {
      document.querySelector(".result").innerText = "You Win!";
    } else {
      document.querySelector(".result").innerText = "You Lose!";
    }
  },

  compareNumber: function (event) {
    event.preventDefault();

    functionObj.setMaxNumber();
    functionObj.setMachineChoseNumber();

    userChoseNumber = choseNumberPart.querySelector("input").value;
    document.querySelector(
      ".info"
    ).innerText = `You chose: ${userChoseNumber}, the machine chose: ${machineChose}`;

    functionObj.showingResult();
  },
};

document
  .querySelector("Form")
  .addEventListener("submit", functionObj.compareNumber);
