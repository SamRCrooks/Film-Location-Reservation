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

var testMarker = L.marker([35.047711, -106.605247], {icon: greenIcon}).addTo(map)
    .bindPopup('BREAKING BAD SHOT HERE')
    .openPopup();

for (i = 0; i <coordinates.length; i++){
	//console.log(coordinates[i][0], coordinates[i][1]);
     /*
    note the addition of the onclick attribute to this button!
    The keyword 'this' lets you pass on a reference to the current
    HTML element
    */
	markers.push(L.marker([coordinates[i][0], coordinates[i][1]], {icon: greenIcon}).addTo(map)
    .bindPopup("<h2> Site: "+ sites[i]+"</h2>"+` <button class='button' id= "${i}" onclick=reserve(this)> RESERVE </button>`)
    .openPopup());

}

function reserve(e) {
    /*
    takes in reference to an HTML element, logs the value of the id attribute
    of that element to the console
    */
    buttonNum = parseInt(e.id);
    console.log("Button number: "+buttonNum);
    markers[buttonNum].setIcon(redIcon);
    console.log(markers[buttonNum])
    console.log(L.marker([coordinates[buttonNum][0], coordinates[buttonNum][1]], {icon: redIcon}).addTo(map)
    .bindPopup("<h2> Site: "+ sites[buttonNum]+"</h2>"+` <button class='buttonReserved'  id= "${buttonNum}" onclick=reserve(this)> RESERVED </button>`)
    .openPopup());
    //document.getElementById(buttonNum).innerText = 'RESERVED';
    document.getElementById(buttonNum).style.background='#cf252b';;
}