jQuery(document).ready(function() {
	//$("#faq").find("dt").click(function() {
	//	$(this).fadeOut("slow");
	//});

	//$("#faq dt").click(function() {
	//	$(this).fadeOut("slow",function() {
	//		$("h3").html("Texto difuminado: " + $(this).html());
	//	});
	//});

	$("#faq dt").click(function() {
		$(this).fadeOut("slow");
	});
	$("h3").click(function() {
		$("dt").fadeIn("slow");
	});
});