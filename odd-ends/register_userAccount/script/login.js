const loginForm = document.querySelector(".loginForm");
const greet = document.querySelector("h1");
const loginInput = document.querySelector(".loginInput");
const nowUserInfo = document.querySelector(".nowUserInfo");


loginForm.addEventListener("submit", logIn);

document.querySelector(".registBtn").addEventListener("click", moveRegistForm);

//1.새로고침해도 로그인된 유저정보 안 사라지게. =>새로운 키와 데이터를 로컬스토리지에 저장?

//3.로그아웃 기능 만들기 =>로컬스토리지에 새롭게 등록한 값도 지워야할듯
//4.꾸미기

function logIn(event) {
  event.preventDefault();

  const loginID = loginForm.querySelector("#loginIdInput").value;
  const loginPW = loginForm.querySelector("#loginPwInput").value;
  let nowLoginUser = {};
  if(savedData !== null){
 nowLoginUser = savedData.find((v) => v.ID === loginID);
  }else{nowLoginUser=null;}

  checkUserExist(loginID, loginPW, nowLoginUser);
  console.log("login sucess!");

  greet.innerText = `Hello ${nowLoginUser.Name}`;
  loginInput.classList.add("hidden");
  nowUserInfo.classList.remove("hidden");
  nowUserInfo.querySelector("#name").innerText = nowLoginUser.Name;
  nowUserInfo.querySelector("#birth").innerText = nowLoginUser.Birth;
}

function checkUserExist(loginID, loginPW, nowLoginUser) {
  if (nowLoginUser === null) {
    document.querySelector("#idExistCheck").innerText = "This ID is not exist";
    throw new Error("This ID is not exist");
  } else {
    document.querySelector("#idExistCheck").innerText = "";

    if (nowLoginUser.PW !== loginPW) {
      document.querySelector("#pwExistCheck").ineerText = "Wrong password";
      throw new Error("Wrong password");
    } else {
      document.querySelector("#pwExistCheck").ineerText = "";
    }
  }
}

function moveRegistForm() {
  registForm.classList.remove("hidden");
}
