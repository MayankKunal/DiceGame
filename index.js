var number=Math.random()*6;
var randomNumber1=Math.floor(number)+1;
document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
var number2=Math.random()*6;
var randomNumber2=Math.floor(number2)+1;
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);
if(randomNumber1===randomNumber2)
{
document.querySelector("h1").innerText="DRAW";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerText="Player 2 win";
}
else{
    document.querySelector("h1").innerText="Player 1 win";
}