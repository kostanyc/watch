let button =document.getElementById("button")
let body =document.querySelector("body")
let color =["red","pink","blue","green"]

body.style.backgroundColor="black"

button.addEventListener("click",function(){
    let colroIndex=parseInt(Math.random()* color.length)
    body.style.backgroundColor= color[colroIndex]
})