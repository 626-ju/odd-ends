class CHARARACTER {
  constructor(name, introduce, order) {
    this.name = name;
    this.introduce = introduce;
  }
}

const 짱구 = new CHARARACTER(
  "짱구",
  `신짱구 다섯살.
   떡잎마을에서 알아주는 천방지축 개구쟁이이다.`
);
const 철수 = new CHARARACTER(
  "철수",
  `떡잎마을의 엄친아 철수. 
  겉으로는 완벽해 보이지만, 비밀스러운 취미를 가졌다.`
);
const 유리 = new CHARARACTER(
  "유리",
  `떡잎마을 방범대 중 전투력 1위. 
  들고다니는 토끼인형은 500kg 넘는다고 하는데....`
);
const 훈이 = new CHARARACTER(
  "훈x놈",
  `떡잎마을 방범대의 모사꾼. 
  이름대신 훈발놈이라고 불리는 경우가 허다하다`
);
const 맹구 = new CHARARACTER("맹구", `ㄷ...ㅗ....ㄹ....
ㅁ...ㅐ...ㅇ...ㅇ...ㅣ`);
const 떡잎마을방범대 = [짱구, 철수, 훈이, 유리, 맹구];

///////////////////////////////////////////////////////////

const charaterName = document.querySelector("#characterName");
const introduceText = document.querySelector("#introduceText");
const charaterImage = document.querySelector("main img");

let savedOrder = localStorage.getItem("order");

document.querySelector("#randomBtn").addEventListener("click", random);
document.querySelector("#rightBtn").addEventListener("click", right);
document.querySelector("#leftBtn").addEventListener("click", left);

if (savedOrder == null) {
  savedOrder = 0;
}
showing();

////////////////////////////////////////////////////////////////////

function left() {
  Number(savedOrder) === 0
    ? (savedOrder = 떡잎마을방범대.length - 1)
    : (savedOrder = Number(savedOrder) - Number(1));

  showing();
  SaveLocalStorage();
}

function right() {
  Number(savedOrder) === 떡잎마을방범대.length - 1
    ? (savedOrder = 0)
    : (savedOrder = Number(savedOrder) + Number(1));

  showing();
  SaveLocalStorage();
}

function random() {
  savedOrder = Math.floor(Math.random() * 떡잎마을방범대.length);
  showing();
  SaveLocalStorage();
}

function SaveLocalStorage() {
  localStorage.setItem("order", savedOrder);
}

function showing() {
  charaterName.innerText = 떡잎마을방범대[savedOrder]["name"];
  introduceText.innerText = 떡잎마을방범대[savedOrder]["introduce"];
  charaterImage.src = `zzanguImg/${savedOrder}.png`;
}
