let navMain = document.querySelector('.nav__wrapper');
let navToggle = document.querySelector('.burger');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav__wrapper--closed')) {
    navMain.classList.remove('nav__wrapper--closed');
    navToggle.classList.remove('burger--closed');
    navToggle.classList.add('burger--opened');
  }

  else {
    navMain.classList.add('nav__wrapper--closed');
    navToggle.classList.remove('burger--opened');
    navToggle.classList.add('burger--closed');
  }
});


// map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.938724585789195, lng: 30.323048020098348},
    zoom: 9
  });

  let marker = new google.maps.Marker({
    position: {lat: 59.938724585789195, lng: 30.323048020098348},
    map: map,
    title: 'hello',
    icon: 'map-pin.png',
    draggable: false
  });
}
