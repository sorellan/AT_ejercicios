var num1 = '';
var num2 = '';
var firstnum = true;


function dec2bin(i)
{ 
	return (i<1)?"":dec2bin((i-(i%2))/2)+i%2; 
}

function setDisplay(value) {
	var disp = document.getElementById("display");
	disp.innerHTML = value;
}

function clearDisplay() {
	var disp = document.getElementById("display");
	disp.innerHTML = '';
}

function pressAc() {
	clearDisplay();
	num1 = '';
	num2 = '';
	firstnum = true;
}

function pressDel() {
	if (firstnum) {
		num1 = num1.substring(0, num1.length-1);
		setDisplay(num1);
	} else {
		num2 = num2.substring(0, num2.length-1);
		setDisplay(num2);
	}
}

function pressNum(num) {
	if (firstnum) {
		if (num1.length < 9) {
			num1 = num1 + num;
			setDisplay(num1);
		}
	} else {
		if (num2.length < 9) {
			num2 = num2 + num;
			setDisplay(num2);
		}
	}
}

function pressAdd() {
	if (num1 == '') {
		alert('No has introducido ningún número');
	} else if (num2 != '') {
		alert('Ya has introducido dos números\nPulsa "=" o reinicia la cuenta con "AC"')
	} else {
		firstnum = false;
		clearDisplay();
	}
}

function pressEqual() {
	if (num1 == '' || num2 == ''){
		alert('No has introducido uno o ningún número\nSe reinicia la operación');
		pressAc();
	} else {
		var result = parseInt(num1, 2) + parseInt(num2, 2);
		var result_bin = dec2bin(result);
		if (result_bin == '') {
			setDisplay('0');
		} else {
			setDisplay(result_bin);
		}
	}
}