$('#d-target').droppable({
	drop: function(ui, event) {
		$(this).css('background-color', 'red');
	}
});