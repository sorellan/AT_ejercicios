function changer(id, newValue){
	id.innerHTML = newValue;
}

function createTag(){
	var num = Math.floor(Math.random() * 5);
	var tag = 'e' + num.toString();
	return tag;
}

function imgrandom(){
	var imagen = document.getElementById('imagen');
	var element = document.getElementById(createTag()).innerHTML;
	var value = '<img src="' + element + '"/>';
	changer(imagen,value);   
}
