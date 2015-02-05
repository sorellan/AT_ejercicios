function changer(id, newValue){
	id.innerHTML = newValue;
}

function imgrandom(){
	var list = ['http://upload.wikimedia.org/wikipedia/commons/e/e4/Getafe-ayuntamiento1.jpg',
		'http://upload.wikimedia.org/wikipedia/commons/6/60/Coliseum-getafe.JPG',
		'http://upload.wikimedia.org/wikipedia/commons/2/28/Universidad-carlos3.jpg', 
		'http://upload.wikimedia.org/wikipedia/commons/9/91/La_alh%C3%B3ndiga%2C_getafe.JPG',
		'http://upload.wikimedia.org/wikipedia/commons/1/1f/Getafe-tren.jpg'];
	var imagen = document.getElementById('imagen');
	var num = Math.floor(Math.random() * 5);
	var value = '<img src="' + list[num] + '"/>';
	changer(imagen,value);   
}
