//Code 

locations = rawData.features;

var ad = [];
var sites = [];
var addressString = "";
var siteString = "";

for (a = 0; a <locations.length; a++){
	ad.push(locations[a].attributes.Address);
	sites.push(locations[a].attributes.Site);
}


function getUnique(arr){ return arr.filter((e,i)=> arr.indexOf(e) >= i) };

ad = getUnique(ad);
sites = getUnique(sites);

for(i = 0; i<ad.length; i++){
	addressString+=ad[i];
	addressString+=", Albuquerque NM \n";

	siteString+=sites[i];
	siteString+=": \n";
}

console.log(addressString,",");
console.log(siteString);

console.log(ad.length,sites.length);