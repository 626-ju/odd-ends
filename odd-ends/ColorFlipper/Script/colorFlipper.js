"use strict";

const centerTextForm = document.querySelector("#centerTextForm");
const bgColorText = centerTextForm.querySelector("h1");
const bgChangeBtn = centerTextForm.querySelector("#bgChangeBtn");

const colorArr = ["red", "blue", "Green"];

let bgColor = getComputedStyle(document.body).backgroundColor;

bgColorText.innerHTML = `BackGround Color is : <span style="color:Rgba(133,122,200);">${bgColor}</span>
`;

bgChangeBtn.addEventListener("click", bgChange);

function bgChange() {
  bgColor = colorArr[Math.floor(Math.random() * colorArr.length)];
  document.body.style.backgroundColor = bgColor;

  bgColorText.innerHTML = `BackGround Color is : <span style="color:Rgba(133,122,200);">${bgColor}</span>
`;
}
