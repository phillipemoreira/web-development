$('#dropables-target').droppable({
	drop: function(ui, event) {
		$(this).css('background-color', 'red');
	}
});

$('#dropables-square').draggable();
