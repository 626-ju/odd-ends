const answer1 = document.querySelector(".A1");
const answer2 = document.querySelector(".A2");
const answer3 = document.querySelector(".A3");
const answer4 = document.querySelector(".A4");

const answer1Btn = document.querySelector(".question1 button");
const answer2Btn = document.querySelector(".question2 button");

const answer3Btn = document.querySelector(".question3 button");

const answer4Btn = document.querySelector(".question4 button");


answer1Btn.addEventListener("click",showAnswer1);
answer2Btn.addEventListener("click",showAnswer2);
answer3Btn.addEventListener("click",showAnswer3);
answer4Btn.addEventListener("click",showAnswer4);


function showAnswer1(event){

    answer1Btn.querySelector("img").classList.toggle("minus");
    answer1.classList.toggle("hidden");

}
function showAnswer2(event){

    answer2Btn.querySelector("img").classList.toggle("minus");
    answer2.classList.toggle("hidden");

}
function showAnswer3(event){

    answer3Btn.querySelector("img").classList.toggle("minus");
    answer3.classList.toggle("hidden");

}
function showAnswer4(event){

    answer4Btn.querySelector("img").classList.toggle("minus");
    answer4.classList.toggle("hidden");

}