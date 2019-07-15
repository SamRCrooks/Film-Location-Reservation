console.log(coordinates[0][0]);

var map = L.map('map').setView([35.084385, -106.650421], 11.1);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([35.047711, -106.605247]).addTo(map)
    .bindPopup('BREAKING BAD SHOT HERE')
    .openPopup();

function basementDweller (feature, layer){
	layer.bindPopup("<h1>Hi!</h1>");
}

//L.geoJson(data.features, {
//	onEachFeature: basementDweller
//}).addTo(map);
