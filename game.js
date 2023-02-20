 var level=0;
 var gameOver=1;
 var gamePattern=[];
 var userClickedPattern=[];
 var buttonColours=["red","blue","green","yellow"];

 function empty(){
   $(".btnn").show().text("Restart");
   gameOver=1;
   level=0;
   gamePattern=[];
   userClickedPattern=[];
   pos=0;
 }

 function nextSequence(){
    var randomNUmber= Math.floor((Math.random()*4));

  
    var randomChosenColour=buttonColours[randomNUmber];
    
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+ randomChosenColour+ ".mp3");
    audio.play();
    playsound(randomChosenColour);


 }


 var pos=0;
function checking(){
   if(gamePattern[pos]==userClickedPattern[pos]){
      pos++;
   }
   else{
      $("h1").text("Game Over!");  
       gameOver=0;
       setTimeout(function() {
         gameOverEffect();
         }, 200); 
      
   }

   if(pos==(gamePattern.length)){
      
      pos=0;
      userClickedPattern=[];
      if(gameOver){ 
         level++;
         $("h1").text("level "+level);
          setTimeout(function() {
          nextSequence();
          }, 500); 
           
      }
   }
   if(!gameOver){
      empty(); 
   }
}
  

$(".btn").click(function( ){
     var userChosenColour=$(this).attr("id");
     playsound(userChosenColour);
     userClickedPattern.push(userChosenColour);
     checking();
});
 



$(".btnn").click(function(){
   $("h1").text("level 0");
   nextSequence();
   $(".btnn").hide();
 });
 

function playsound(name){
   $("#"+name).addClass("pressed");
   let timeoutID = setTimeout(function(){
      $("#"+name).removeClass("pressed");
   }, 100 );
   
    var audio = new Audio("sounds/"+ name+ ".mp3");
    audio.play();  
}

function gameOverEffect(){
   $("body").addClass("game-over");
   let timeoutID = setTimeout(function(){
      $("body").removeClass("game-over");
   }, 100 );

   $(".btnn").text()

   var audio = new Audio("sounds/wrong.mp3");
   audio.play();  
}

 

 