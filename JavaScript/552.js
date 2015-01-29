function vaciar(tag){
	elements = document.getElementsByTagName(tag);
	for (i in elements){
		elements[i].innerHTML='';
	}
};	
