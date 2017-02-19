   var isStarted = false;
   var createdTime;
   var clickedTime;
   var reactionTime;

   var bleep = new Audio();
   bleep.src = 'resources/click.mp3';

   function moveCircle(){
      var randonLeft = Math.random() * 502;
      var randonTop = Math.random() * 412;

      document.getElementById("box").style.top = randonLeft.toString() + 'px';
      document.getElementById("box").style.left = randonTop.toString() + 'px';
      document.getElementById("box").style.backgroundColor = getRandomColor();

      var randonTime = Math.random() * 3000;

      console.log("timeout started.");
      setTimeout(function(){
         if (isStarted == true){
            document.getElementById("box").style.visibility ="visible";
            createdTime = Date.now();
            console.log("circle drawn.");
         }
      }, randonTime);

   }

   function getReactionTimeColor(){
      if (reactionTime < 500) {
         return "green";
      } else if (reactionTime < 750){
         return "blue";
      } else if (reactionTime < 1000){
         return "orange";
      } else {
         return "red";
      }
   }

   function updateReactionTime(){
      clickedTime = Date.now();
      reactionTime = clickedTime - createdTime;

      var formattedReactionTime = reactionTime + "ms";

      document.getElementById("time").style.color = getReactionTimeColor();
      document.getElementById("time").innerHTML = formattedReactionTime;

      console.log("circle clicked in "+  formattedReactionTime)
   }
   
   function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }

   document.getElementById("btn-start").onclick = function(){
      if (isStarted == false){
         console.log("Reaction time test started.");
         isStarted = true;
         moveCircle();
      }
   }

   document.getElementById("btn-stop").onclick = function(){
      if (isStarted == true){
         isStarted = false;
         document.getElementById("box").style.visibility = "hidden";
         document.getElementById("time").innerHTML = "(0)ms";
         document.getElementById("time").style.color = "#333333"
         console.log("Reaction time test ended.");  
      }
   }

   document.getElementById("box").onclick = function(){
      bleep.play();
      this.style.visibility = "hidden";
      updateReactionTime();
      moveCircle();
   }