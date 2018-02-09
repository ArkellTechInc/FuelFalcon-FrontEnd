function fullscreen() {
	$('a').click(function() {
		if(!$(this).hasClass('noeffect')) {
			window.location = $(this).attr('href');
			return false;
		}
	});
}

fullscreen();