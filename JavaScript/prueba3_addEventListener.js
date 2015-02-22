//usando "onload"
function setup() {
	txt = document.getElementById("texto");
	out = document.getElementById("copia");
	txt.addEventListener("input", echo);
}

function echo() {
	out.innerHTML = this.value;
}
