const clockTitle = document.querySelector(".dDay-clock");

function calculateDay() {
    
  const nowdate = new Date();
  const xmasEve = new Date(2024, 11, 24);//달은 0~11
  const d_miliSec = xmasEve - nowdate;

  const d_date = 
  String(Math.ceil(d_miliSec / (1000 * 60 * 60 * 24))).padStart(2,"0");

  const d_hour = 
  String( Math.floor((d_miliSec / (1000 * 60 * 60)) % 24)).padStart(2, "0");

  const d_minitue = 
  String(Math.floor((d_miliSec / (1000 * 60)) % 60)).padStart( 2,"0");

  const d_Sec = 
  String(Math.floor((d_miliSec / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `${d_date}d ${d_hour}h ${d_minitue}m ${d_Sec}s`;
}

setInterval(calculateDay, 1000);
