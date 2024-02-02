const loginForm = document.querySelector(".loginForm");
const greet = document.querySelector("h1");
const loginInput = document.querySelector(".loginInput");
const nowUserInfo = document.querySelector(".nowUserInfo");



let nowLoginUser ={};
let savedLoginUser =JSON.parse(localStorage.getItem('nowLoginUser'));


if(savedLoginUser !== null ){
nowLoginUser = savedLoginUser;
moveNowUserInfoPage(nowLoginUser);
} 


loginForm.addEventListener("submit", logIn);

document.querySelector(".registBtn").addEventListener("click", moveRegistForm);

/////////////////////////
nowUserInfo.querySelector("#logOutBtn").addEventListener("click",deleteNowLoginUser);
/////////////////////////

//1.새로고침해도 로그인된 유저정보 안 사라지게. =>새로운 키와 데이터를 로컬스토리지에 저장? v
//3.로그아웃 기능 만들기 =>로컬스토리지에 새롭게 등록한 값도 지워야할듯 v //왜 두번 클릭해야함....ㅠㅠ
//4.꾸미기



function logIn(event) {
  event.preventDefault();

  const loginID = loginForm.querySelector("#loginIdInput").value;
  const loginPW = loginForm.querySelector("#loginPwInput").value;
 
 if(savedData !== null){
 nowLoginUser = savedData.find((v) => v.ID === loginID);
 //이게 find못하면 undefined를 반환하네.
  }else{nowLoginUser=null;}


  checkUserExist(loginID, loginPW, nowLoginUser);

  saveNowLoginUser(nowLoginUser);

  console.log("login sucess!");

  moveNowUserInfoPage(nowLoginUser);
}




function checkUserExist(loginID, loginPW, nowLoginUser) {
  if (nowLoginUser === undefined || nowLoginUser===null) {
    document.querySelector("#idExistCheck").innerText = "This ID is not exist";
    
    throw new Error("This ID is not exist");
  } else {
    document.querySelector("#idExistCheck").innerText = "";

    if (nowLoginUser.PW !== loginPW) {
      document.querySelector("#pwExistCheck").innerText = "Wrong password";
      throw new Error("Wrong password");
    } else {
      document.querySelector("#pwExistCheck").ineerText = "";
    }
  }
}




function saveNowLoginUser(nowLoginUser){

  localStorage.setItem('nowLoginUser', JSON.stringify(nowLoginUser));


}

//////////////////////////////////////////////
function deleteNowLoginUser(e){
  e.preventDefault();
  localStorage.removeItem("nowLoginUser");

  location.reload();

  
}
///////////////////////////////////////////


/*
function deleteNowLoginUser(){

return new Promise((resovlve)=> {

  localStorage.removeItem("nowLoginUser");
  return resovlve();
}).then((v)=>location.reload())

}
*/
  //location.reload(); //******왜 두번 눌러야하지?  //이거 비동기 실행이래 
 // 그래서 버튼 누르면 삭제되기 전에 먼저 새로고침부터 되는듯...ㄷㄷ 이런 곳에서 프로미스 쓰는건가?

//그냥 location reload()를 포함하는 함수를 하나 더 만들까...? =>실패...





function moveRegistForm() {
  registForm.classList.remove("hidden");
  
}

function moveNowUserInfoPage(nowLoginUser){
  greet.innerText = `Hello ${nowLoginUser.Name}`;
  loginInput.classList.add("hidden");
  nowUserInfo.classList.remove("hidden");
  nowUserInfo.querySelector("#name").innerText = nowLoginUser.Name;
  nowUserInfo.querySelector("#birth").innerText = nowLoginUser.Birth;

}

