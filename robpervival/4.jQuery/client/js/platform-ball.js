var ballJumping = false;

var upWithBall = {
    top: "350px"
};

var downWithBall = {
    top: "420px"
};

function ballJump(){
    console.log('ball will jump.');
    $('#ball').animate(upWithBall, 600, ballFall);
}

function ballFall(){
    console.log('ball will fall.');
    $('#ball').animate(downWithBall, 350, function(){
        ballJumping = false;
    });
}

function moveHorizontally(increment){
    var oldLeft = strPX2Num($('#ball').css('left'));
    var newLeft = (oldLeft + increment) + 'px';
    $('#ball').css('left', newLeft);
}

function strPX2Num(pixelAttr){
    var withoutPX = pixelAttr.substr(0, pixelAttr.length - 2);
    return parseInt(withoutPX);
}

function handleSpacebar(){
    if (ballJumping == false){
        ballJumping = true;
        ballJump();
    }
}

function handeLeftArrow(){
    moveHorizontally(-2);
}

function handeRightArrow(){
    moveHorizontally(2);
}

$(document).keydown(function(e) {
    switch(e.which){
        case 32 : handleSpacebar();
            break;
        case 37 : handeLeftArrow();
            break;
        case 39 : handeRightArrow();
            break;

        default: break;
    }
});