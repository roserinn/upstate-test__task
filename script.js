 
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

// -------------- header -----------------

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.new__header__row');
  const section2 = document.getElementById('services');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= section2.offsetTop) {
      header.style.display = 'block';
    } else {
      header.style.display = 'none';
    }
  });
});