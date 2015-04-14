jQuery(document).ready(function() {
	$("#date").datepicker();
	$("#menu").menu();
	$("#menu").menu({
  		icons: { submenu: "ui-icon-squaresmall-plus" }
	});
	$("#draggable").draggable();
	$("#draggable2").draggable({ revert: "valid" });
	$("#droppable").droppable({
      drop: function( event, ui ) {
        $(this)
          .addClass("ui-state-highlight")
          .find("p")
            .html("Dropped!");
      }
    });
    $("#droppable").droppable({
      out: function( event, ui ) {
      	$(this)
      	  .removeClass("ui-state-highlight")
      	  .find("p")
      	    .html("Drop here");
      }
    });
});