// import Slick from './slick-1.8.1/slick/slick.js';
const links = document.querySelectorAll(".page");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
    
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

/*=============== Header -scroll bg change===============*/

function changeBg() {
    let navbar = document.getElementById('nav');
    let scrollValue = window.scrollY;
    if (scrollValue < 150) {
        navbar.classList.remove('bgcolor');
    } else {
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll', changeBg);

// ================ Home image slider ================

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');

let sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');

  }

  btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
          sliderNav(i);
      });
  });

  let manualNav = 0;
  setInterval(() => {
    sliderNav(manualNav);
    if(manualNav++ >= 3){
        manualNav = 0;
    }
  }, 5000);