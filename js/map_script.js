var map = L.map('map').setView([35.084385, -106.650421], 11.1);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var greenIcon = L.icon({
    iconUrl: 'icons/camera_green.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [25, 75], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'icons/camera_red.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [25, 75], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var markers = [];

for (i = 0; i <coordinates.length; i++){
	//console.log(coordinates[i][0], coordinates[i][1]);
	markers.push(L.marker([coordinates[i][0], coordinates[i][1]], {icon: greenIcon}).addTo(map)
    .bindPopup("<h2> Site: "+ sites[i]+"</h2>"+ "Start: <input type='date' id='start' name='trip-start' value='2019-07-26'>"+ "<br> End: <input type='date' id='start' name='trip-start' value='2019-07-27'> <br> <br>"+ `<button class='button' id= "${i}" onclick=reserve(this)> RESERVE </button>`)
    .openPopup());

}
console.log(coordinates.length);

function reserve(e) {
    /*
    takes in reference to an HTML element, logs the value of the id attribute
    of that element to the console
    */
    buttonNum = parseInt(e.id);
    console.log("Button number: "+buttonNum);
    markers[buttonNum].setIcon(redIcon);
    markers[buttonNum] = L.marker([coordinates[buttonNum][0], coordinates[buttonNum][1]], {icon: redIcon}).addTo(map)
    .bindPopup("<h2> Site: "+ sites[buttonNum]+"</h2> <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'> <input type='hidden' name='cmd' value='_xclick'><input type='hidden' name='business' value='samrcrooks@gmail.com'><input type='hidden' name='lc' value='US'><input type='hidden' name='button_subtype' value='services'><input type='hidden' name='no_note' value='0'><input type='hidden' name='currency_code' value='USD'><input type='hidden' name='bn' value='PP-BuyNowBF:btn_paynowCC_LG.gif:NonHostedGuest'><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'> </form>"+` <button class='buttonReserved'  id= "${buttonNum}" onclick=reserve(this)> RESERVED </button>`)
    .openPopup();
    //document.getElementById(buttonNum).innerText = 'RESERVED';
    document.getElementById(buttonNum).style.background='#cf252b';;
}