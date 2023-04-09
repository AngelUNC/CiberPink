let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.840005, lng: -99.233019 },
    zoom: 20,
    mapTypeId: 'satellite',
    styles: [{
      featureType: "all",
      elementType: "labels",
      stylers: [{
        visibility: "on"
      }]
    }]
  });
}

window.initMap = initMap;
