jQuery(document).ready(function() {
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map');

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	//localizacion
	map.locate({setView: true, maxZoom: 16});
	
	// Define a function to show the name property
    function popUpName(feature, layer) {
		// does this feature have a property named popupContent?
		if (feature.properties && feature.properties.Name) {
            layer.bindPopup(feature.properties.Name);
		}
    }

     // Add to map a layer with all points in buildings-urjc.json
    $.getJSON("buildings-urjc.json", function(data) {
		buildingsLayer = L.geoJson(data, {
	    	onEachFeature: popUpName
		}).addTo(map);
    });
});
