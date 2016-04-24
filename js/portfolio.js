$(document).ready(function() {
	
	var duration = 300;

	$("#btn_graphics").on("mouseover", function(){
		$(this).stop(true).animate({
			opacity: 0;
		}, duration);
	});
	
	
}); // end ready