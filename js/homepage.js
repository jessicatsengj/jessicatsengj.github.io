$(function(){

	var duration = 300;

	$('.picture').on('mouseover', function(){
		$(this).find('span').stop(true).animate({
			opacity: 1
		}, duration);
	})
	.on('mouseout', function(){
		$(this).find('span').stop(true).animate({
			opacity: 0
		}, duration);
	});
	
});