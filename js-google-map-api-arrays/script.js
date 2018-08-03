var caracas = {lat: 10.4806, lng: -66.9036};
var newYork = {lat: 40.7128, lng: -74.0059};
var paris = {lat: 48.856, lng: 2.352};
var losAngeles ={lat: 34.05, lng: -118.2437};
var locations = [caracas, newYork, paris, losAngeles]

function initMap() {
  // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    locations.forEach(place => {
        var marker = new google.maps.Marker({position: place, map: map})
    });
    
}