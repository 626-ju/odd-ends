const registForm = document.querySelector(".registForm");
const exitBtn = document.querySelector("#exitRegistForm");

let userInfo = [];

let savedData = JSON.parse(localStorage.getItem("userInfo"));
if (savedData !== null) {
  userInfo = savedData;
}

registForm.addEventListener("submit", saveUserInfo);
exitBtn.addEventListener("click", exitRegistForm);



function saveUserInfo(event) {
  event.preventDefault();

  /*
class USERINFO {
  constructor(name, birth, id, pw) {
    this.Name = name;
    this.Birth = birth;
    this.Id = id;
    this.Pw = pw;
  }
}

const userInfo_useClass = new USERINFO(
  registForm.querySelector("#nameInput").value,
  registForm.querySelector("#birthInput").value,
  registForm.querySelector("#idInput").value,
  registForm.querySelector("#pwInput").value
);
//클래스로도 완전가능!
*/

  const userInfoObj = {};
  userInfoObj["Name"] = registForm.querySelector("#nameInput").value;
  userInfoObj["Birth"] = registForm.querySelector("#birthInput").value;
  userInfoObj["ID"] = registForm.querySelector("#idInput").value;
  userInfoObj["PW"] = registForm.querySelector("#pwInput").value;

  duplicationCheck();
  saveLocalStorage(userInfoObj);
 alert("Welcome!")
 location.reload();
}

function duplicationCheck() {
  if (
    userInfo.some((v) => {
      return v.ID === registForm.querySelector("#idInput").value;
    })
  ) {
    registForm.querySelector("#duplicationCheck").innerText =
      "This ID already exist";

    //여기서 제출 안되게 막아야함.
    throw new Error("This ID already exist");
  } else {
    registForm.querySelector("#duplicationCheck").innerText = "";
  }
}


function saveLocalStorage(userInfoObj) {
  userInfo.push(userInfoObj);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  registForm.querySelector("#nameInput").value = "";
  registForm.querySelector("#birthInput").value = "";
  registForm.querySelector("#idInput").value = "";
  registForm.querySelector("#pwInput").value = "";
}

function exitRegistForm(){
  registForm.classList.add("hidden");
}