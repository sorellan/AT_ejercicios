$( document ).ready(function() {
	$( "a" ).click(function( event ) {
		alert( "Hola!" );
		event.preventDefault();
	});
});