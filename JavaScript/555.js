function adder(){
	var op = document.getElementById("op").innerHTML;
	var oplist = op.split("+");
	var opres = parseInt(oplist[0]) + parseInt(oplist[1]);
	var res = document.getElementById("res");
	res.innerHTML = "= " + opres.toString();
};
