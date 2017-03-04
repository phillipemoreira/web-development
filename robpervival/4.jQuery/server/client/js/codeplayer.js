var windowHeight = $(window).height();
var menuBarHeight = $('#codeplayer-menubar').height();

$('.codeplayer-code-container').css('height', (windowHeight - menuBarHeight) + 'px');

$('.codeplayer-toogle').click(function() {
	$(this).toggleClass('codeplayer-selected');

    var codeContainerDiv = '#codeplayer-' + $(this).html() + '-container';

    $(codeContainerDiv).toggle();

    var showingDivs = $('.codeplayer-code-container').filter(function() {
        return $((this)).css('display') != 'none';
    }).length;

    var divWidthPercentage = 100 / showingDivs;

    $('.codeplayer-code-container').css('width', divWidthPercentage + '%');

});

$('#codeplayer-runbuttondiv').click(function() {
    var iframeContent = '<style>' +
        $('#codeplayer-cssCode').val() +
        '</style>' +
        $('#codeplayer-htmlCode').val();

    $('#codeplayer-iframe').contents().find('html').html(iframeContent);

    document.getElementById('codeplayer-iframe').contentWindow. eval($('#codeplayer-jsCode').val())
});