$.get("1-test.html", function(data) {
	$('#placeholder').append(data);
});

$.ajax({
	url: "2-test.html"
}).done(function(data){
	$('#placeholder').append(data);
});