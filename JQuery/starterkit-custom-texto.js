// Add some text to li elements in #orderedlist element
// And some text when hovering over other elements...
// And change text when overing over other elements...
//
jQuery(document).ready(function() {
	$("#orderedlist").find("li").each(function(index){
		$(this).append(" This is li number " + index);
	});

	$("#orderedlist2 > li:last > ul > li").hover(function() {
		$(this).append(" Dentro");
		}, function() {
		$(this).append(" Fuera");	
	});

	$("#faq dd").hover(function() {
		str = $(this).html();
		$(this).html("Changed!");
		}, function(){
		$(this).html(str);
	});
});