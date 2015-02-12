txt = document.getElementById("texto");
out = document.getElementById("copia");
txt.addEventListener("input", function echo(){
	out.innerHTML = this.value;});
