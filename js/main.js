const header=document.querySelector('.header');
const hamburgermenu=document.querySelector(".hamburger-menu");

window.addEventListener('scroll',function(){
    let windowPosition=window.scrollY > 0;
    console.log(windowPosition)
    header.classList.toggle("active",windowPosition)
})


hamburgermenu.addEventListener('click',function(){
    header.classList.toggle('menu-open')
})