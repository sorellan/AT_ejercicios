//funcion con nombre
txt = document.getElementById("texto");
out = document.getElementById("copia");

function echo() {
	out.innerHTML = this.value;
}
txt.addEventListener("input", echo);