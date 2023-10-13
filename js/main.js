const ham = document.querySelector(".hamburger"),
        sidemenu = document.querySelector(".menu")
ham.addEventListener('click',()=>{
    ham.classList.toggle('hamburger_active')
    sidemenu.classList.toggle('menu_active')
})