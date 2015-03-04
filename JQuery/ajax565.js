jQuery(document).ready(function() {
	$.ajax({
		url: "http://localhost:8000/texto",
		cache: false})
  	.done(function(html) {
    	$("#texto1").append(html);
  	});

  	$("#texto2").click(function() {
  		$.ajax({
  			url: "http://localhost:8000/texto2",
  			cache: false})
  		.done(function(html) {
    		$("#texto1").append(html);
  		});
  	});
});
