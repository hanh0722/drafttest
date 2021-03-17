const hamburger = document.querySelector(".hamburger");
const listNav = document.querySelector(".right-list");

hamburger.addEventListener("click", () =>{
    listNav.classList.toggle("show-up-hamburger");
})