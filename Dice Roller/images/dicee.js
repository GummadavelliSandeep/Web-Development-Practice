var randomNumber=Math.floor(Math.random()*6)+1;
var randomdiceeimage="dice"+randomNumber+".png";
var randomimagesource="images/"+randomdiceeimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceeimage="dice"+randomNumber2+".png";
var randomimagesource="images/"+randomdiceeimage;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomimagesource);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}