if (Modernizr.canvas) {
	alert("Canvas let’s go!");
} else {
	alert("No native Canvas support available :(");
}
if (Modernizr.canvastext) {
	alert("Canvas Text let’s go!");
} else {
	alert("No native Canvas Text support available :(");

}
/*
if (Modernizr.video) {
	alert("Video let’s go!");
} else {
	alert("No native Video support available :(");
}
if (Modernizr.video.ogg) {
	alert("Video ogg let’s go!");
} else {
	alert("No native Video ogg support available :(");
}
if (Modernizr.localstorage) {
	alert("LocalStorage let’s go!");
} else {
	alert("No native LocalStorage support available :(");
}
*/
if (Modernizr.geolocation) {
	alert("Geolocation let’s go!");
	navigator.geolocation.getCurrentPosition(show_map);
} else {
	alert("No native Geolocation support available :(");
}
/*
if (Modernizr.applicationcache) {
	alert("Offline applications let’s go!");
} else {
	alert("No native Offline application support available :(");
}
*/

