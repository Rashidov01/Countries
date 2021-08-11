let elModeBody = document.querySelector(".body");
let siteHeaderBtn = document.querySelector(".site-header__btn");

if (siteHeaderBtn){
 siteHeaderBtn.addEventListener("click",
 function(){
   elModeBody.classList.toggle
   ("body--dark")
 })
}