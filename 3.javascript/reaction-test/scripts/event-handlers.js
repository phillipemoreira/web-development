$("#btn-start").click(function(){
  if (isStarted == false){
     start();
  }
});

$("#btn-stop").click(function(){
  if (isStarted == true){
     stop();
  }
});

$("#box").click(function(){
  handleBoxClick();
});