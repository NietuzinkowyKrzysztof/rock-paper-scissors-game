var playerscore=0;
var compscore=0;
var playermove;
var compmove= Math.floor(Math.random()*3)+1;
document.getElementById("scoreboard").innerHTML=playerscore +":"+compscore;

function rock(){
   playermove=1;
   whowins();
}
function scissors(){
   playermove=2;
   whowins();
}
function paper(){
   playermove=3;
   whowins();
}

function whowins(){
   if(playermove==compmove ){
      document.getElementById("whowins").innerHTML="Remisik";
      playerscore++;
      compscore++;
      document.getElementById("scoreboard").innerHTML=playerscore +":"+compscore;
      compmove= Math.floor(Math.random()*3)+1;
}
   else if(playermove==1 && compmove==2 || playermove==2 && compmove==3 || playermove==3 && compmove==1){
      document.getElementById("whowins").innerHTML="Gracz wygrywa essa";
      playerscore++;
      document.getElementById("scoreboard").innerHTML=playerscore +":"+compscore;
      compmove= Math.floor(Math.random()*3)+1;
   }
   else{ document.getElementById("whowins").innerHTML="Doskonale zaprojektowane AI wygrywa";
            compscore++;
            document.getElementById("scoreboard").innerHTML=playerscore +":"+compscore;
            compmove= Math.floor(Math.random()*3)+1;
   }


}