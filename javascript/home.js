let bars  =document.querySelector(".bars")
let login = document.getElementById("login")
let modulLogin =document.querySelector(".modul-login")
let loginContent =document.querySelector('.login-content')
let postionX = document.querySelector(".postionX")
let close =document.getElementById("close")
bars.addEventListener("click" ,  () =>{

let nav =document.querySelector(".nav-buttons")
nav.classList.toggle('showBTN')
if(nav.classList.contains("showBTN")){
  bars.innerHTML =`<i class="fa-solid fa-xmark"></i>`
}else{
 
bars.innerHTML =`      <i class="fa-solid fa-bars"></i>`
}
})
//responsive


//##################################################################################
// render posts before registertion
function  renderPosts(){

    const url = `https://tarmeezacademy.com/api/v1/posts?limit=3`

axios.get(url)
.then( res  =>{
   let data   = res.data.data
console.log(data)
 let posts  = document.getElementById("posts")
 posts.innerHTML =''
   for( let datum of data){

let content = `
<div class="post">
<div class="header">
  <img id="img-user" src="${datum.author.profile_image}" alt="${datum.author.name}" />
  <p id user-name> ${datum.author.username}</p>
</div>
<img id="img-post" src="${datum.image}" alt="" />

<small id="timePost">
${datum.created_at}
</small>
<p id="post-content">
${datum.body}
</p>
<div class="comments">
  <i class="fa-solid fa-comment"></i>
  <span id="commentNumber">${datum.comments_count}</span>
  <small>comments</small>
</div>
</div>

`
 posts.innerHTML += content
   }
})
}
renderPosts()
//events on login
login.addEventListener('click' , () =>{

    loginContent.classList.add("login-show")
modulLogin.classList.add('modul-show')

})


postionX.addEventListener("click" , () =>{

    loginContent.classList.add("y")
    modulLogin.classList.add("x")
    loginContent.classList.remove('login-show')
    modulLogin.classList.remove('modul-show')

})
close.addEventListener('click' , () =>{

    loginContent.classList.add("y")
    modulLogin.classList.add("x")
    loginContent.classList.remove('login-show')
    modulLogin.classList.remove('modul-show')


})