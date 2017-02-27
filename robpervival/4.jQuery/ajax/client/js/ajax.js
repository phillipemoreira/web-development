$.ajax({
	url: "html/2-test.html"
}).done(function(data){
	$('#placeholder').append(data);
});
