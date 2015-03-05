jQuery(document).ready(function() {
	var items = [];
	$.getJSON( "frases_aleatorias567.json", function( data ) {
		items = data.list;	
		nuevafrase();	
		$("#another").click(nuevafrase);
	});

	function nuevafrase(){
		var newwords = [];
		for(var i=0;i<items.length;i+=1){
        	newwords.push(items[i][Math.floor(Math.random() * items[i].length)]);
        }
        $("#sentence").html(newwords.join(" "));
    }
});