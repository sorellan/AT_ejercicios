function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}
changer ("hplogo", "<H1>Hola</H1>");