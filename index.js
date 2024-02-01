var random1 = Math.floor(Math.random()*6)+1 ;
var RandomDiceImage = "dice" + random1 + ".png";
var ImageSource = "images/" + RandomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , ImageSource);

var random2 = Math.floor(Math.random()*6)+1 ;
var RandomDiceImage2 = "images/" + "dice" + random2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , RandomDiceImage2);


if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Play 1 Wins";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Play 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="TIE";
}



