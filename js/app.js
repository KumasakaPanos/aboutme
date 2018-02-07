"use strict";
var ansOneInitial=prompt("Am I a minor?");
var ansOne=ansOneInitial.toLowerCase();
if(ansOne === "yes"||ansOne === "y")
{
alert("No... Do I really look that young?")
}
else if(ansOne === "no"||ansOne === "n"){
    alert("Right.")
}
else
    alert("Yes or No only please.")
var ansTwoInitial=prompt("Is my Laptop older than Windows 10?");
var ansTwo=ansTwoInitial.toLowerCase();
if(ansTwo === "yes"||ansTwo === "y"){
    alert("I still like it though...")
}
else if(ansTwo === "no"||ansTwo === "n"){
    alert("Yeah, but I stil like it.")
}
else{
alert("Yes or No only please.")
}
var ansThreeInitial=prompt("Do I use earbuds?");
var ansThree=ansThreeInitial.toLowerCase();
if(ansThree === "yes"||ansThree === "y"){
    alert("No, I hate putting them in.")
}
else if(ansThree === "no"||ansThree === "n"){
alert("Right!")
}
else{
alert("Yes or No only please.")
}
var ansFourInitial=prompt("Is my Laptop plugged in?");
var ansFour=ansFourInitial.toLowerCase();
if(ansFour === "y"||ansFour === "yes")        {
            alert("What a relief.")
        }
        else if(ansFour === "no"||ansFour === "n")        {
            alert("Uh oh.")
        }
        else        {
        alert("Yes or No only please.")
        }
var ansFiveInitial=prompt("Is there a coffee mug where I sit?");
var ansFive=ansFiveInitial.toLowerCase();
if(ansFive === "yes"||ansFive === "y"){
    alert("I should put that in the washing machine")
}
else if(ansFive === "no"||ansFive === "n"){
    alert("Ah, so that's why I'm thirsty.")
}
else{
alert("Yes or No only please.")
}