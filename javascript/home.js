let bars  =document.querySelector(".bars")

bars.addEventListener("click" ,  () =>{

let nav =document.querySelector(".nav-buttons")
nav.classList.toggle('showBTN')
if(nav.classList.contains("showBTN")){
  bars.innerHTML =`<i class="fa-solid fa-xmark"></i>`
}else{
 
bars.innerHTML =`      <i class="fa-solid fa-bars"></i>`
}
})
