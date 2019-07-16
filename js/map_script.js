console.log(coordinates[0][0]);

var map = L.map('map').setView([35.084385, -106.650421], 11.1);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var greenIcon = L.icon({
    iconUrl: 'icons/camera_green.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'icons/camera_red.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var markers = [];

//var testMarker = L.marker([35.047711, -106.605247], {icon: greenIcon}).addTo(map)
//    .bindPopup('BREAKING BAD SHOT HERE')
//    .openPopup();

for (i = 0; i <coordinates.length; i++){
	console.log(coordinates[i][0], coordinates[i][1]);
	L.marker([coordinates[i][0], coordinates[i][1]], {icon: greenIcon}).addTo(map)
    .bindPopup(sites[i])
    .openPopup();
}
//L.geoJson(data.features, {
//	onEachFeature: basementDweller
//}).addTo(map);
