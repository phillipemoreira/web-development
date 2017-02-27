$.ajax({
	url: "html/2-test.html"
}).done(function(data){
	$('#placeholder').append(data);
});

var regex = /Great/i;
var string = "Regex is great!";
var result = string.match(regex);

//alert(result);