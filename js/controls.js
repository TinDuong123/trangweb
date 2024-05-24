function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
var geocoder = new google.maps.Geocoder();

    document.getElementById('showMapButton').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, map) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
 var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            document.getElementById('map').style.display = 'block';
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
