//evitando uso de this
txt = document.getElementById("texto");
out = document.getElementById("copia");

function echo() {
	out.innerHTML = txt.value;
}
txt.addEventListener("input", echo);