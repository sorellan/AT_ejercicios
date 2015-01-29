function changer(id, newValue){
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function aleatorio(){
	changer("res", "");
	var e1 = Math.floor(Math.random() * 100);
	var e2 = Math.floor(Math.random() * 100);
	var newValue = e1.toString()+"+"+e2.toString();
	changer("op", newValue);
}

function adder(){
	var op = document.getElementById("op").innerHTML;
	var oplist = op.split("+");
	var opres = parseInt(oplist[0]) + parseInt(oplist[1]);
	var newValue = "="+opres.toString();
	changer("res", newValue);
}
