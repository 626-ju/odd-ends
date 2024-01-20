



const counterMain = document.querySelector("#CounterMain");
const countingNow = counterMain.querySelector("#CountingNow");

const button = counterMain.querySelector(".btns");

const decrease = button.querySelector("#decrease");
const reset = button.querySelector("#reset");
const increase = button.querySelector("#increase");

let num = 0;
if (localStorage.getItem("countNumber") !== null) {
  num = localStorage.getItem("countNumber");
  countingNow.style.color = localStorage.getItem("color");
}
countingNow.innerText = num;


const 버튼클릭 = 버튼누르기();
decrease.addEventListener("click", 버튼클릭.minus);
reset.addEventListener("click", 버튼클릭.zero);
increase.addEventListener("click", 버튼클릭.plus);


function saveNumber() {
  localStorage.setItem("countNumber", num);
  localStorage.setItem("color", countingNow.style.color);
}



function 버튼누르기(){
  
  function plus(){
    num++;
    
    countingNow.innerText = num;
    countingNow.style.color = "green";
    saveNumber();
  }

  function minus(){

    num--;
    
    countingNow.innerText = num;
    countingNow.style.color = "red";
    saveNumber()
  }

  function zero(){
    num=0;
    
    countingNow.innerText = 0;
    countingNow.style.color = "black";
    saveNumber()
  }

  return { plus,
    minus,
    zero
   }
}

