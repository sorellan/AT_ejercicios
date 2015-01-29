function changer(id, newValue){
	var element = document.getElementById(id);
	element.innerHTML = newValue;
};

function adder(){
	var op = document.getElementById("op").innerHTML;
	var oplist = op.split("+");
	var opres = parseInt(oplist[0]) + parseInt(oplist[1]);
	var newValue = "="+opres.toString();
	changer("res", newValue);
};
