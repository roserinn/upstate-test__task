 
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



// document.addEventListener("DOMContentLoaded", function() {
// const menuLinks = document.querySelectorAll('.header__links a');

//   menuLinks.forEach(function(link) {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();

//       const targetId = this.getAttribute('href').substring(1);
//       const targetElement = document.getElementById(targetId);

//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: 'smooth'
//       });
//     });
//   });

//   window.addEventListener('scroll', function() {
//     const fromTop = window.scrollY;

//     menuLinks.forEach(function(link) {
//       const sectionId = link.getAttribute('href').substring(1);
//      const section = document.getElementById(sectionId);

//       if (
//         section.offsetTop <= fromTop &&
//         section.offsetTop + section.offsetHeight > fromTop
//       ) {
//         menuLinks.forEach(function(link) {
//           link.classList.remove('active');
//         });
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   });
// });
