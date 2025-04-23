// let forms = document.forms[i];

let demo = document.getElementById("submit") 
console.log(demo)
demo.onclick = function(e){
  e.preventDefault()

let forms = document.getElementsByTagName("form")
console.log(forms)

let username = document.getElementById("username").value;
console.log(username)

let password = document.getElementById("password").value;
console.log(password)

window.localStorage.setItem(username,password)
}