
const links = document.querySelectorAll(".page");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  try {
    
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  } 
  catch (error) {
    console.log(error)  
  }
}

/*=============== sponsor wrapper ===============*/
const sponsorWrapper = document.querySelector('.sponsor-wrapper');
const sponsorImg = document.querySelector('.sponsor-img');

function startAnimation() {
    // Calculate the total width of the content
    const contentWidth = Array.from(sponsorImg.children)
        .reduce((total, span) => total + span.offsetWidth, 0);

    // Set the animation duration based on content width
    const duration = contentWidth / 50; // Adjust speed as needed
    sponsorImg.style.animationDuration = `${duration}s`;
}

// Start the animation when the window loads
window.addEventListener('load', startAnimation);

// Restart the animation when it ends
sponsorImg.addEventListener('animationiteration', () => {
    // Recalculate in case content changed
    startAnimation();
});

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
 

/*=============== Header -scroll bg change===============*/

function changeBg() {
    let navbar = document.getElementById('nav');
    let scrollValue = window.scrollY;
    if (scrollValue < 100) {
        navbar.classList.remove('bgcolor');
        sponsorWrapper.style.backgroundColor = '#f8f8f8'; 
    } else {
        navbar.classList.add('bgcolor');
        sponsorWrapper.style.backgroundColor = '#f8f8f8';
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

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    function changeLinkState() {
      let index = sections.length;
  
      while (--index && window.scrollY + 250 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
  });
  