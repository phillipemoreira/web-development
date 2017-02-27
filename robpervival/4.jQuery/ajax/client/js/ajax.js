$.get("html/1-test.html", function(data) {
	$('#placeholder').append(data);
});

$.ajax({
	url: "html/2-test.html"
}).done(function(data){
	$('#placeholder').append(data);
});