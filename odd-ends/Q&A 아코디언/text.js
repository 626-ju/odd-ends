const answer1 = document.querySelector(".question1 .A1");


const answer1Btn = document.querySelector(".question1 button");


answer1Btn.addEventListener("click",showAnswer)


function showAnswer(){
    answer1Btn.querySelector("img").classList.toggle("minus");
    answer1.classList.toggle("hidden");

}