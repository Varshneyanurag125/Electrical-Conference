// import Slick from './slick-1.8.1/slick/slick.js';
// let myData = JSON.parse(data);
// console.log(myData);
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
          nav = document.getElementById(navId),
          link = document.querySelectorAll('.nav__link');
    
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    });

    link.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    });
   
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /* =============== show pdf btn ===============*/

const toggleButton = document.getElementById("pdf-btn");
const iframe = document.getElementById("pdf");

// Add event listener to the button
toggleButton.addEventListener("click", function(event) {
    // Toggle the display property of the iframe
    event.stopPropagation();
    if (iframe.style.display === "none") {
        iframe.style.display = "flex";
        toggleButton.textContent = "Close";
    } else {
        iframe.style.display = "none";
        toggleButton.textContent = "Click Here";
    }
});

document.body.addEventListener("click", function() {
    if (iframe.style.display === "flex") {
        iframe.style.display = "none";
        toggleButton.textContent = "Click Here";
    }
});

/*=============== Header -scroll bg change===============*/

function changeBg() {
    let navbar = document.getElementById('nav');
    let scrollValue = window.scrollY;
    if (scrollValue < 100) {
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