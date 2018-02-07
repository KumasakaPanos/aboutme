"use strict";
var ansOneInitial=prompt("Am I a minor?");
var ansOne=ansOneInitial.toLowerCase();
if(ansOne === "yes"||ansOne === "y")
{
alert("No... Do I really look that young?")
console.log("Your answer was that I was a minor.")
}
else if(ansOne === "no"||ansOne === "n"){
    alert("Right.")
    console.log("You answered that I was a major.")
}
else
    alert("Yes or No only please.")
var ansTwoInitial=prompt("Is my Laptop older than Windows 10?");
var ansTwo=ansTwoInitial.toLowerCase();
if(ansTwo === "yes"||ansTwo === "y"){
    alert("I still like it though...")
    console.log("You said it was old, and it is. It's a Thinkpad T420, a gift from my brother.")
}
else if(ansTwo === "no"||ansTwo === "n"){
    alert("No, it is, but I stil like it.")
    console("I'm glad my laptop impressed you, but it's a Thinkpad T420, with a proud windows 7 sticker on it.")
}
else{
alert("Yes or No only please.")
}
var ansThreeInitial=prompt("Do I use earbuds?");
var ansThree=ansThreeInitial.toLowerCase();
if(ansThree === "yes"||ansThree === "y"){
    alert("No, I hate putting them in.");
    console.log("You answered that I use them, but I don't, they make me feel like there are slugs in my ears.");
}
else if(ansThree === "no"||ansThree === "n"){
alert("Right!");
console.log("You were right, I don't, I use over the ear speakers.");
}
else{
alert("Yes or No only please.");
}
var ansFourInitial=prompt("Is my Laptop plugged in?");
var ansFour=ansFourInitial.toLowerCase();
if(ansFour === "y"||ansFour === "yes")        {
            alert("What a relief.");
            console.log("Good thing it's plugged in, it'd be awful to forget my charger two days in a row.")
        }
        else if(ansFour === "no"||ansFour === "n")        {
            alert("Uh oh.");
            console.log("I hope you're just pulling my leg with that answer, I'd hope I remembered this time.");
        }
        else        {
        alert("Yes or No only please.")
        }
var ansFiveInitial=prompt("Is there a coffee mug where I sit?");
var ansFive=ansFiveInitial.toLowerCase();
if(ansFive === "yes"||ansFive === "y"){
    alert("I should put that in the washing machine")
    console.log("I just don't want to leave a mess in the classroom.")
}
else if(ansFive === "no"||ansFive === "n"){
    alert("Ah, so that's why I'm thirsty.")
    console.log("I guess I could have already washed the mug and put it away too.")
}
else{
alert("Yes or No only please.")
}