$('.page-section').css('min-height', $(window).height() / 1.3 - 50);

function initMap() {
  var uluru = {lat: -23.444277, lng: -46.919568};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 19,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}