function color() {
	code = document.getElementById("texto");
	out = document.getElementById("box");
	code.addEventListener('input', changeColor)
}

function changeColor() {
	out.style.backgroundColor = code.value;
}