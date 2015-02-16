// ==UserScript==
// @include        https://twitter.com/sergiosalcedo91
// ==/UserScript==

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

var newPhoto = '<a class="ProfileAvatar-container u-block js-tooltip profile-picture media-thumbnail" href="https://pbs.twimg.com/profile_images/418512056166260736/DLL23pNh.jpeg" title="Sergio Salcedo " data-resolved-url-large="https://pbs.twimg.com/profile_images/418512056166260736/DLL23pNh.jpeg" data-url="https://pbs.twimg.com/profile_images/418512056166260736/DLL23pNh.jpeg" target="_blank"> <img class="ProfileAvatar-image " src="http://img1.wikia.nocookie.net/__cb20110804011452/counterstrike/es/images/7/7e/Caca.jpg" alt="Sergio Salcedo "> </a>';

var id = document.getElementById('ProfileAvatar');

changer(id, newPhoto);


