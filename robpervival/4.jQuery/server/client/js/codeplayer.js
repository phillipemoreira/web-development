var windowHeight = $(window).height();
var menuBarHeight = $('#codeplayer-menubar').height();

$('.codeplayer-code-container').css('height', (windowHeight - menuBarHeight) + 'px');

$('.codeplayer-toogle').click(function() {
	$(this).toggleClass('codeplayer-selected');
});