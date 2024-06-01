'use strict'

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");


const hamburgerContainer = document.querySelector(".HamburgerContainer");


hamburgerContainer.addEventListener("click", hamburgerClick);

function hamburgerClick(){
    box1.classList.toggle("hidden");
    box2.classList.toggle("rotate1");
    box3.classList.toggle("rotate2");

}