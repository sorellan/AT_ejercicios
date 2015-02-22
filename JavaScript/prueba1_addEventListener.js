//función anónima
txt = document.getElementById("texto");
out = document.getElementById("copia");

txt.addEventListener("input", function(){
	out.innerHTML = this.value;});
