$(document).ready(function () {

    $(window).scroll(function () {

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

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}