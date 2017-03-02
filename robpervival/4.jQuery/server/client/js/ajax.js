$.get("1-test.html", function(data) {
	$('#ajax-placeholder').append(data);
});

$.ajax({
	url: "2-test.html"
}).done(function(data){
	$('#ajax-placeholder').append(data);
});