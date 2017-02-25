var upWithBall = {
	top: "380px"
};

var downWithBall = {
	top: "440px"
};

function ballJump(){
	console.log('ball will jump.');
	$('#ball').animate(upWithBall, 800, ballFall);
}

function ballFall(){
	console.log('ball will fall.');
	$('#ball').animate(downWithBall, 450);
}

$(document).keypress(function(e) {
    if(e.which == 13) {
    	ballJump();
    }
});