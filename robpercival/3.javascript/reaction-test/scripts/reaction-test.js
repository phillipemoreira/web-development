var isStarted = false;

var attempts;

var createdTime;
var clickedTime;

var bleep = new Audio();
bleep.src = '../click.mp3';

// Event Handlers
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

// Functions
function moveCircle(){
   var randonLeft = Math.random() * 420;
   var randonTop = Math.random() * 368;

   $('#box').css('top', randonTop.toString() + 'px');
   $('#box').css('left', randonLeft.toString() + 'px');
   $('#box').css('backgroundColor', getRandomColor());

   var randonTime = Math.random() * 3000;

   console.log("timeout started.");
   setTimeout(function(){
      if (isStarted == true){
         $('#box').css('visibility', 'visible');
         createdTime = Date.now();
         console.log("circle drawn.");
      }
   }, randonTime);

}

function getReactionTimeColor(reactionTime){
   if (reactionTime < 800) {
      return "green";
   } else if (reactionTime < 1400){
      return "blue";
   } else if (reactionTime < 1900){
      return "orange";
   } else {
      return "red";
   }
}

function getAverageReactionTime() {
   var sum = 0;
   attempts.forEach(function(element){
      sum += element;
   });

   var average = (sum / attempts.length);
   return Math.round(average);
}

function updateAttemptCountLabel(reactionTime) {
   var attemptCountLabelId = '#attempt' + attempts.length;
   $(attemptCountLabelId).html(reactionTime);
}

function updateReactionTime(){
   clickedTime = Date.now();
   var reactionTime = clickedTime - createdTime;

   attempts.push(reactionTime);
   updateAttemptCountLabel(reactionTime);

   var averageReactionTime = getAverageReactionTime();

   $('#average').html(averageReactionTime);
   $('#average').css('color', getReactionTimeColor(reactionTime));

   console.log("circle clicked in "+  reactionTime + 'ms')
}

function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function clear(){
   $('#gameover').css('visibility', 'hidden');
   $('#average').html('(0)');
   $('#average').css('color', '#333');

   for (var i = 1; i <= 10; i++) {
      var attemptCountLabelId = '#attempt' + i;
      $(attemptCountLabelId).html('0');   
   }
}

function start() {
   console.log("Reaction time test started.");
   
   clear();

   isStarted = true;
   attempts = new Array();
   
   moveCircle();
}

function stop() {
   isStarted = false;

   $('#box').css('visibility', 'hidden');
   $('#gameover').css('visibility', 'visible');

   console.log("Reaction time test ended.");  
}

function handleBoxClick() {
   bleep.play();
   $(this).css('visibility', 'hidden');
   
   updateReactionTime();

   if (attempts.length < 10){
      moveCircle();   
   } else {
      stop();
   }
}
