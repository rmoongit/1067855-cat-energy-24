let navMain = document.querySelector('.nav__wrapper');
let navToggle = document.querySelector('.burger');
let pageMain = document.querySelector('.no-js');


pageMain.classList.remove('no-js');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('nav__wrapper--opened');
  navToggle.classList.toggle('burger--opened');
});

//slider
