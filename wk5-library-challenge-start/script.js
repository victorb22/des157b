(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.9775, -122.0311], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.9770, -122.0330]).addTo(map);

    var circle = L.circle([37.9633, -122.0295], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [37.9766, -122.0330],
        [37.9760, -122.0315],
        [37.9770, -122.0310]
    ]).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>This is Downtown").openPopup();
    circle.bindPopup("Monument Blvd. McDonalds");
    polygon.bindPopup("Movie theaters in Concord");
}());