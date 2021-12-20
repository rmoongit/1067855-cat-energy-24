let navMain = document.querySelector('.nav__wrapper');
let navToggle = document.querySelector('.burger');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('nav__wrapper--closed');
  navToggle.classList.toggle('burger--closed');
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
  initMap();
}
