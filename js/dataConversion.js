//Code 

locations = rawData.features;

var ad = [];
var si = [];
var addressString = "";
var siteString = "";

for (a = 0; a <locations.length; a++){
	ad.push(locations[a].attributes.Address);
	si.push(locations[a].attributes.Site);
}


function getUnique(arr){ return arr.filter((e,i)=> arr.indexOf(e) >= i) };

ad = getUnique(ad);
si = getUnique(si);

for(i = 0; i<ad.length; i++){
	addressString+=ad[i];
	addressString+=", Albuquerque NM \n";

	siteString+=si[i];
	siteString+=": \n";
}

console.log(addressString,",");
console.log(siteString);

console.log(ad.length,si.length);