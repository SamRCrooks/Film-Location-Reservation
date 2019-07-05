/*var fs = require('fs');*/


var fs = require('fs');

var data = fs.readFileSync('film_locations.json','utf8');
var filmLocations = JSON.parse(data);

console.log(typeof filmLocations);


console.log("Executed after line reading film_locations data");



var map = L.map('map').setView([35.084385, -106.650421], 11.1);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
	L.marker([35.047711, -106.605247]).addTo(map)
    .bindPopup('📷 BREAKING BAD SHOT HERE 📷')
    .openPopup();