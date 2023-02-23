let bars  =document.querySelector(".bars")
let login = document.getElementById("login")
let modulLogin =document.querySelector(".modul-login")
let loginContent =document.querySelector('.login-content')
let postionX = document.querySelector(".postionX")
let close =document.getElementById("close")
let loginBtn  = document.getElementById("loginBtn")
let dat =[]
function failLogin(){
  let login =document.querySelector('.sucessLofgin')
  let h4 = login.querySelector('h4')
  h4.innerText =`you have no account try register`
  h4.style.color ='red'
  login.classList.add('msg')
  setTimeout(function(){
    login.classList.remove('msg')
  
  },4000)


}
function successLogin(){

let login =document.querySelector('.sucessLofgin')
login.classList.add('msg')
let h4 = login.querySelector('h4')
h4.innerText =`you have login successfully`
h4.style.color ='green'
setTimeout(function(){
  login.classList.remove('msg')

},4000)

}
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
// start login in 

loginBtn.addEventListener('click' , () =>{
 let input  = document.getElementById('user-name')
let pass = document.querySelector('.pass')

 if(input.value == '' || pass.value ==''){
let msg = document.querySelector('.messageForValidating')
msg.classList.add('showMessage')
setTimeout(function (){
  msg.classList.remove('showMessage')

},3000)
input.style.outline ='2px solid rgb(206, 112, 112)'
pass.style.outline ='2px solid rgb(206, 112, 112)'

 }else{
  input.style.outline ='2px solid green'
pass.style.outline ='2px solid green'
 const user = {
  "username" : input.value,
  "password" : pass.value
 }


axios.post(`https://tarmeezacademy.com/api/v1
/login` ,user)
.then(res  =>{
  const token = res.data.token
  const user  = res.data.user
 dat =[ token ,user] 
console.log(dat)
localStorage.setItem('userData' , JSON.stringify(dat))


})

// ma;e nav bar like login out

 }
 checkUser()
})
//check user if exist or not
function checkUser (){

  let check =localStorage.getItem('userData')
  if(check){
    successLogin()
    console.log(check)
  }else{
failLogin()
  }
}

