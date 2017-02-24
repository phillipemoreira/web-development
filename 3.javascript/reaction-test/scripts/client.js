   var isStarted = false;
   var createdTime;
   var clickedTime;
   var reactionTime;

   var attemptCount = 0;

   var bleep = new Audio();
   bleep.src = 'resources/click.mp3';

   // functions

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

   function getReactionTimeColor(){
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

   function updateAttemptCountLabel(reactionTime) {
      var attemptCountLabelId = '#attempt' + (attemptCount + 1);
      $(attemptCountLabelId).html(reactionTime);
   }

   function updateReactionTime(){
      clickedTime = Date.now();
      reactionTime = clickedTime - createdTime;

      updateAttemptCountLabel(reactionTime);

      $('#time').html(reactionTime);
      $('#time').css('color', getReactionTimeColor());

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

   function start() {
      console.log("Reaction time test started.");
      
      $('#gameover').css('visibility', 'hidden');

      isStarted = true;
      attemptCount = 0;
      
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

      attemptCount++;
      if (attemptCount < 10){
         moveCircle();   
      } else {
         stop();
      }
   }

   // clicks

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