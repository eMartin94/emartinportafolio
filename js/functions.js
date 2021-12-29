$(document).ready(function () {

    // Transition effect for navbar and back-to-top icon
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.header').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.header').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });


});

function alerta(){
    alert("hola")
}

/* let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.add('active');
} */

/* document.querySelector('#close-login-form').onclick = () =>{
   loginForm.classList.remove('active');
} */

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   loginForm.classList.remove('active');
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}