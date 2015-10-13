// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// Your assignment
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var currentScore,
    highestScore = 0, 
    lowestScore = 100,
    scoreA = [],
    scoreB = [],
    scoreC = [],
    scoreD = [],
    scoreF = [];

// var lowestScore = 100;
// var highestScore = 0;
// var scoreA = [];
// var scoreB = [];
// var scoreC = [];
// var scoreD = [];
// var scoreF = [];

var scoreElement = document.getElementById("scores");

var scoreList = "";
var currentScore = "";


for (var i = 0; i < scores.length; i++) {
  currentScore = scores[i];
  if (currentScore <= lowestScore) {
    lowestScore = currentScore;
  }
  if (currentScore >= highestScore) {
    highestScore = currentScore;
  }

    console.log("currentScore", currentScore);
  switch (true) {
    case (currentScore >= 51 &&  currentScore <= 60):
      console.log("You got an F.");
      scoreF.push(currentScore);
      break; 
    case (currentScore >= 61 &&  currentScore <= 70):
      console.log("You got a D.");
      scoreD.push(currentScore);
      break;
    case (currentScore >= 71 &&  currentScore <= 80):
      console.log("You got a C.");
      scoreC.push(currentScore);
      break;
    case (currentScore >= 81 &&  currentScore <= 90):
      console.log("You got a B.");
      scoreB.push(currentScore);
      break;
    case (currentScore >= 91 &&  currentScore <= 100):
      console.log("You got an A.");
      scoreA.push(currentScore);
      break;
    default: 
      console.log("No grade available.");
      break;

      scoreList = scoreList + "<div id='grades'>" + currentScore + "</div>";
  }
}
    console.log("lowestScore", lowestScore)
    console.log("highestScore", highestScore)

scoreElement.innerHTML = scoreList;

console.log("scoreA", scoreA.length);
console.log("scoreB", scoreB.length);
console.log("scoreC", scoreC.length);
console.log("scoreD", scoreD.length);
console.log("scoreF", scoreF.length);

console.log("currentScore", currentScore);

