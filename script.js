
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelectorAll(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
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

hamburger.forEach((menu) => {
  menu.addEventListener("click", toggleMenu);
})

menuItems.forEach(
  function (menuItem) {
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
      header.style.opacity = '1';
      header.style.zIndex = '2';
    } else {
      header.style.opacity = '0';
      header.style.zIndex = '-1';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll('.new__header__links a');

  window.addEventListener('scroll', function () {
    const fromTop = window.scrollY;

    menuLinks.forEach(function (link) {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        menuLinks.forEach(function (link) {
          link.style.color = '#ffffff9c';
        });
        link.style.color = 'white';
      } else {
        link.style.color = '#ffffff9c';
      }
    });
  });
});


// -------------------------------  animations ---------------------------------

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('.header__navigation');
const betterPlaceBlock = document.querySelectorAll('.better__place__info__block div')

const headerAnim = gsap.from(header, {
  y: -100,
  opacity: 0,
  duration: 1.1,
  ease: 'power1'
})

const betterPlaceBlockAnim = gsap.from(betterPlaceBlock, {
  stagger: 0.3,
  x: -150,
  opacity: 0,
  easy: 'back',
  duration: 1,
  delay: .7
})

// ---------------------------------------

const advantadesRow = document.querySelectorAll('.advantages__column');

const advantadesRowAnim = gsap.from(advantadesRow, {
  stagger: 0.3,
  y: 150,
  opacity: 0,
  duration: 1,
  delay: .7,
  paused: true
})

ScrollTrigger.create({
  trigger: ".advantages__container",
  start: 'top 100%',
  end: 'bottom 100%',
  onEnter: () => {
    advantadesRowAnim.play();
  },
  onLeaveBack: () => {
    advantadesRowAnim.reverse();
  },
});

// ----------------------------------------------

const ourMissionSection = document.querySelectorAll('.our__mission__container div');

const ourMissionSectionAnim = gsap.from(ourMissionSection, {
  stagger: 0.1,
  y: 150,
  opacity: 0,
  duration: 1.3,
  ease: 'back',
  delay: .4,
  paused: true
})

ScrollTrigger.create({
  trigger: ".our__mission__info__block",
  start: 'top 100%',
  end: 'bottom 100%',
  onEnter: () => {
    ourMissionSectionAnim.play();
  },
  onLeaveBack: () => {
    ourMissionSectionAnim.reverse();
  },
});

// -------------------------------------------------


const guestionsSectionTitle = document.querySelector('.guestions__title')
const guestionsSection = document.querySelectorAll('.guestions__accordion .tab');


const guestionsSectionTitleAnim = gsap.from(guestionsSectionTitle, {
  y: -100,
  duration: 1,
  delay: .5,
  opacity: 0,
  ease: 'back',
  paused: true
})

const guestionsSectionAnim = gsap.from(guestionsSection, {
  delay: 1.5,
  stagger: 0.1,
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power1',
  paused: true
})

ScrollTrigger.create({
  trigger: ".guestions__title",
  start: 'top 70%',
  end: 'bottom 100%',
  onEnter: () => {
    guestionsSectionTitleAnim.play();
    guestionsSectionAnim.play();
  },
  onLeaveBack: () => {
    guestionsSectionTitleAnim.reverse();
    guestionsSectionAnim.reverse();
  },
});



// ------------------------ admin panel -----------------------

document.addEventListener('DOMContentLoaded', () => {
  const editableBlock = document.querySelectorAll('.isEditable');
  const loginBtn = document.querySelector('#login');
  const saveBtn = document.querySelector('#save');
  const clearBtn = document.querySelector('#clear');
  const exitBtn = document.querySelector('#exit');
  const adminPanel = document.querySelector('#admin-panel');

  setLocalStorage(editableBlock, 'defaultData');

  let data = JSON.parse(localStorage.getItem('data'));


  if (data) {
    setDataToElement('data');
  }

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    adminPanel.style.display = 'block';
    loginBtn.style.display = 'none';
    saveBtn.style.display = 'block';
    clearBtn.style.display = 'block';
    exitBtn.style.display = 'block';
    editableBlock.forEach(item => {
      item.classList.add('editable-block');
      item.setAttribute('contenteditable', "true");
    });
  });

  exitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    adminPanel.style.display = 'none';
    loginBtn.style.display = 'block';
    saveBtn.style.display = 'none';
    clearBtn.style.display = 'none';
    exitBtn.style.display = 'none';
    editableBlock.forEach(item => {
      item.classList.remove('editable-block');
      item.setAttribute('contenteditable', "false");
    });
  });

  saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setLocalStorage(editableBlock, 'data');
  });

  clearBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setDataToElement('defaultData');
    localStorage.removeItem('data');
  });

  function setDataToElement(data) {
    let getData = JSON.parse(localStorage.getItem(data));

    Object.keys(getData).forEach(key => {
      let elem = document.getElementById(key);

      elem.textContent = getData[key].content;
      elem.style.width = `${getData[key].width}px`;
      elem.style.height = `${getData[key].height}px`;
    });
  }

  function setLocalStorage(elem, storageName) {
    let obj = {};
    elem.forEach(item => {
      obj = {
        ...obj,
        [item.id]: {
          content: item.textContent,
          width: item.offsetWidth,
          height: item.offsetHeight,
        }
      }
    });
    localStorage.setItem(storageName, JSON.stringify(obj));
  }

})

