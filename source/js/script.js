var navMain = document.querySelector('.nav__wrapper');
var navToggle = document.querySelector('.burger');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav__wrapper--closed')) {
    navMain.classList.remove('nav__wrapper--closed');
    navMain.classList.add('nav__wrapper--opened');
  } else {
    navMain.classList.add('nav__wrapper--closed');
    navMain.classList.remove('nav__wrapper--opened');
  }
});
