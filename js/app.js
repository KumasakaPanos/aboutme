'use strict';
var correctAnswers = 0;
var username = prompt('Hello user, what\'s ya name?');
function question6() {
  var correct = false;
  var attempt = 0;
  var answer = prompt('What is the answer?');
  do {
    if (answer=== '42') {
      correct = true;
    }
    else {
      attempt += 1;
      if (answer > 42) {
        alert('Too high.');
      }
      if (answer < 42) {
        alert('Too low.');
      }
      alert(4 - attempt + ' tries left.');
      answer = prompt('Try again.');
    }
  } while (attempt < 3 && correct === false);
  if (answer === '42') {
    alert('Good number. But what\'s the question?');
    correctAnswers+=1;
  }
  else {
    alert('The answer was 42.');
  }
  console.log('The user finished with the question ' + correct + ' after ' + attempt + ' tries.');
}
function question7() {
  var states=['oregon','hawaii','washington','victoria','idaho','utah','montana','california'];
  var correctState = false;
  var attempt = 0;
  var answer = prompt('Name a state or Province I have been.');
  var i;
  answer = answer.toLowerCase();
  while (attempt < 4 && correctState === false) {
    for (i=0;i<states.length;i++) 
    {
      if (states[i]===answer)
      {correctState=true;}
    }
    i=0;
    if (correctState===false){
      alert(4 - attempt + ' tries left.');
      answer = prompt('Try again.');
      attempt += 1;
    }
  } 
  if (correctState === true) {
    alert('Good guess!');
    correctAnswers += 1;
  }
  else {
    alert('Hey, you\'ll get it next time. You could have responded with Washington, Idaho, Victoria, Hawaii, California or Oregon.');
  }
  console.log('The user finished with the question ' + correctState + ' after ' + attempt + ' tries.');
}
function questionsYesNo() {
  var ansOneInitial = prompt('Am I a minor?');
  var ansOne = ansOneInitial.toLowerCase();
  if (ansOne === 'yes' || ansOne === 'y') {
    alert('No... Do I really look that young?');
  }
  else if (ansOne === 'no' || ansOne === 'n') {
    alert('Right.');
    correctAnswers += 1;
    console.log('User replied ' + ansOne);
  }
  else
    alert('Yes or No only please.');
  console.log('For question one user replied ' + ansOne);
  var ansTwoInitial = prompt('Is my Laptop older than Windows 10?');
  var ansTwo = ansTwoInitial.toLowerCase();
  if (ansTwo === 'yes' || ansTwo === 'y') {
    alert('Right. I still like it though...');
    correctAnswers += 1;
  }
  else if (ansTwo === 'no' || ansTwo === 'n') {
    alert('No, it is, but I stil like it.');
  }
  else {
    alert('Yes or No only please.');
  }
  console.log('For question two user replied ' + ansTwo);
  var ansThreeInitial = prompt('Do I use earbuds?');
  var ansThree = ansThreeInitial.toLowerCase();
  if (ansThree === 'yes' || ansThree === 'y') {
    alert('No, I hate putting them in.');
  }
  else if (ansThree === 'no' || ansThree === 'n') {
    alert('Right!');
    correctAnswers += 1;
  }
  else {
    alert('Yes or No only please.');
  }
  console.log('For question three user replied ' + ansThree);
  var ansFourInitial = prompt('Are all dogs beautiful?');
  var ansFour = ansFourInitial.toLowerCase();
  if (ansFour === 'y' || ansFour === 'yes') {
    alert('Indeed.');
    correctAnswers += 1;
  }
  else if (ansFour === 'no' || ansFour === 'n') {
    alert('How dare you');
  }
  else {
    alert('Yes or No only please.');
  }
  console.log('For question four user replied ' + ansFour);
  var ansFiveInitial = prompt('Is my backpack Black?');
  var ansFive = ansFiveInitial.toLowerCase();
  if (ansFive === 'yes' || ansFive === 'y') {
    alert('True.');
    correctAnswers += 1;
  }
  else if (ansFive === 'no' || ansFive === 'n') {
    alert('Maybe I got a new one... Did I break it?');
  }
  else {
    alert('Yes or No only please.');
  }
  console.log('For question five user replied ' + ansFive);
}
//Functions end
questionsYesNo();
question6();
question7();
alert('You got ' + correctAnswers + '/7 correct, ' + username);