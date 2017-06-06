$('.page-section').css('min-height', $(window).height() / 1.4 - 50);

function initMap() {
  var uluru = {lat: -23.444277, lng: -46.919568};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


$('#facebook-img').click(function() {
    var profile = 'https://www.facebook.com/alzenia.moreira';
    window.open(profile,'_blank','',''); 
});