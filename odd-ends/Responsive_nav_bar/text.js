const hoverBtn=document.querySelector(".nav_bar span");
const menu_list = document.querySelector(".nav_element");

hoverBtn.addEventListener("click",toggleMenu);




function toggleMenu(){
    menu_list.classList.toggle("hidden");

}