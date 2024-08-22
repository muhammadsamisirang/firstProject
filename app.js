
// window.addEventListener("scroll",function(){
//     let nav=document.querySelector("nav");

//     if(window.pageYOffset >=2 ){
//         nav.classList.toggle("nav-active")
//     }
//     else{
//         nav.classList.remove("nav-active")
//     }
// })


let bars=document.querySelector(".bars");
let links=document.querySelector("nav ul");

bars.addEventListener("click",()=>{
    links.classList.toggle("ul-active");

})