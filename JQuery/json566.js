jQuery(document).ready(function() {
	$("#boton").click(function() {
		$.getJSON( "json566.json", function( data ) {
			$.each( data, function( key, val ) {
    			$("#texto").append("<p>" + val + "</p>");
  			});
		});
	});
});