/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    
    
    https://mathematicscourses.github.io/PreCalculus/PreCalculusOnsite/precalculus.html
    https://mathematicscourses.github.io/PreCalculus/PreCalculusOnsite/GradesCalculators.html
*/

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Solutions to the Questions
function solutions(solution) {
  var e = document.getElementById(solution);
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

// Answers to the Questions
function toggle(answer) {
  var e = document.getElementById(answer);
  if (e.style.display === "block" || e.style.display === "") e.style.display = "none";
  else e.style.display = "block";
}

("use strict");

/* 
  MTH 161 
  Given: Student MLM scores
  To Calculate: the current MLM grade and the cumulative MLM grade
*/

document.getElementById("gradeMLM").addEventListener("submit", gradeMLM);

function gradeMLM(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightTwoOne1st = parseFloat(document.getElementById("weightTwoOne1st").value, 10) || 0,
    scoreTwoOne1st = parseFloat(document.getElementById("scoreTwoOne1st").value, 10) || 0,
    weightedScoreTwoOne1st,
    weightTwoOne2nd = +parseFloat(document.getElementById("weightTwoOne2nd").value, 10) || 0,
    scoreTwoOne2nd = +parseFloat(document.getElementById("scoreTwoOne2nd").value, 10) || 0,
    weightedScoreTwoOne2nd,
    weightTwoOne3rd = +parseFloat(document.getElementById("weightTwoOne3rd").value, 10) || 0,
    scoreTwoOne3rd = +parseFloat(document.getElementById("scoreTwoOne3rd").value, 10) || 0,
    weightedScoreTwoOne3rd,
    weightTwoOne4th = +parseFloat(document.getElementById("weightTwoOne4th").value, 10) || 0,
    scoreTwoOne4th = +parseFloat(document.getElementById("scoreTwoOne4th").value, 10) || 0,
    weightedScoreTwoOne4th,
    weightTwoOne5th = +parseFloat(document.getElementById("weightTwoOne5th").value, 10) || 0,
    scoreTwoOne5th = +parseFloat(document.getElementById("scoreTwoOne5th").value, 10) || 0,
    weightedScoreTwoOne5th,
    weightTwoOne6th = +parseFloat(document.getElementById("weightTwoOne6th").value, 10) || 0,
    scoreTwoOne6th = +parseFloat(document.getElementById("scoreTwoOne6th").value, 10) || 0,
    weightedScoreTwoOne6th,
    weightTwoTwo1st = parseFloat(document.getElementById("weightTwoTwo1st").value, 10) || 0,
    scoreTwoTwo1st = parseFloat(document.getElementById("scoreTwoTwo1st").value, 10) || 0,
    weightedScoreTwoTwo1st,
    weightTwoTwo2nd = parseFloat(document.getElementById("weightTwoTwo2nd").value, 10) || 0,
    scoreTwoTwo2nd = parseFloat(document.getElementById("scoreTwoTwo2nd").value, 10) || 0,
    weightedScoreTwoTwo2nd,
    weightTwoThree1st = +parseFloat(document.getElementById("weightTwoThree1st").value, 10) || 0,
    scoreTwoThree1st = +parseFloat(document.getElementById("scoreTwoThree1st").value, 10) || 0,
    weightedScoreTwoThree1st,
    weightTwoThree2nd = +parseFloat(document.getElementById("weightTwoThree2nd").value, 10) || 0,
    scoreTwoThree2nd = +parseFloat(document.getElementById("scoreTwoThree2nd").value, 10) || 0,
    weightedScoreTwoThree2nd,
    weightTwoThree3rd = +parseFloat(document.getElementById("weightTwoThree3rd").value, 10) || 0,
    scoreTwoThree3rd = +parseFloat(document.getElementById("scoreTwoThree3rd").value, 10) || 0,
    weightedScoreTwoThree3rd,
    weightTwoFour1st = +parseFloat(document.getElementById("weightTwoFour1st").value, 10) || 0,
    scoreTwoFour1st = +parseFloat(document.getElementById("scoreTwoFour1st").value, 10) || 0,
    weightedScoreTwoFour1st,
    weightTwoFour2nd = +parseFloat(document.getElementById("weightTwoFour2nd").value, 10) || 0,
    scoreTwoFour2nd = +parseFloat(document.getElementById("scoreTwoFour2nd").value, 10) || 0,
    weightedScoreTwoFour2nd,
    weightTwoFour3rd = +parseFloat(document.getElementById("weightTwoFour3rd").value, 10) || 0,
    scoreTwoFour3rd = +parseFloat(document.getElementById("scoreTwoFour3rd").value, 10) || 0,
    weightedScoreTwoFour3rd,
    weightTwoFive1st = parseFloat(document.getElementById("weightTwoFive1st").value, 10) || 0,
    scoreTwoFive1st = parseFloat(document.getElementById("scoreTwoFive1st").value, 10) || 0,
    weightedScoreTwoFive1st,
    weightTwoFive2nd = parseFloat(document.getElementById("weightTwoFive2nd").value, 10) || 0,
    scoreTwoFive2nd = parseFloat(document.getElementById("scoreTwoFive2nd").value, 10) || 0,
    weightedScoreTwoFive2nd,
    weightTwoFive3rd = parseFloat(document.getElementById("weightTwoFive3rd").value, 10) || 0,
    scoreTwoFive3rd = parseFloat(document.getElementById("scoreTwoFive3rd").value, 10) || 0,
    weightedScoreTwoFive3rd,
    weightTwoFive4th = parseFloat(document.getElementById("weightTwoFive4th").value, 10) || 0,
    scoreTwoFive4th = parseFloat(document.getElementById("scoreTwoFive4th").value, 10) || 0,
    weightedScoreTwoFive4th,
    weightTwoSix = parseFloat(document.getElementById("weightTwoSix").value, 10) || 0,
    scoreTwoSix = parseFloat(document.getElementById("scoreTwoSix").value, 10) || 0,
    weightedScoreTwoSix,
    weightThreeOne1st = +parseFloat(document.getElementById("weightThreeOne1st").value, 10) || 0,
    scoreThreeOne1st = +parseFloat(document.getElementById("scoreThreeOne1st").value, 10) || 0,
    weightedScoreThreeOne1st,
    weightThreeOne2nd = +parseFloat(document.getElementById("weightThreeOne2nd").value, 10) || 0,
    scoreThreeOne2nd = +parseFloat(document.getElementById("scoreThreeOne2nd").value, 10) || 0,
    weightedScoreThreeOne2nd,
    weightThreeTwo = parseFloat(document.getElementById("weightThreeTwo").value, 10) || 0,
    scoreThreeTwo = parseFloat(document.getElementById("scoreThreeTwo").value, 10) || 0,
    weightedScoreThreeTwo,
    weightThreeThree1st = parseFloat(document.getElementById("weightThreeThree1st").value, 10) || 0,
    scoreThreeThree1st = parseFloat(document.getElementById("scoreThreeThree1st").value, 10) || 0,
    weightedScoreThreeThree1st,
    weightThreeThree2nd = parseFloat(document.getElementById("weightThreeThree2nd").value, 10) || 0,
    scoreThreeThree2nd = parseFloat(document.getElementById("scoreThreeThree2nd").value, 10) || 0,
    weightedScoreThreeThree2nd,
    weightThreeThree3rd = parseFloat(document.getElementById("weightThreeThree3rd").value, 10) || 0,
    scoreThreeThree3rd = parseFloat(document.getElementById("scoreThreeThree3rd").value, 10) || 0,
    weightedScoreThreeThree3rd,
    weightThreeThree4th = parseFloat(document.getElementById("weightThreeThree4th").value, 10) || 0,
    scoreThreeThree4th = parseFloat(document.getElementById("scoreThreeThree4th").value, 10) || 0,
    weightedScoreThreeThree4th,
    weightThreeThree5th = parseFloat(document.getElementById("weightThreeThree5th").value, 10) || 0,
    scoreThreeThree5th = parseFloat(document.getElementById("scoreThreeThree5th").value, 10) || 0,
    weightedScoreThreeThree5th,
    weightThreeFour = parseFloat(document.getElementById("weightThreeFour").value, 10) || 0,
    scoreThreeFour = parseFloat(document.getElementById("scoreThreeFour").value, 10) || 0,
    weightedScoreThreeFour,
    weightThreeFive = parseFloat(document.getElementById("weightThreeFive").value, 10) || 0,
    scoreThreeFive = parseFloat(document.getElementById("scoreThreeFive").value, 10) || 0,
    weightedScoreThreeFive,
    weightFourOne1st = parseFloat(document.getElementById("weightFourOne1st").value, 10) || 0,
    scoreFourOne1st = parseFloat(document.getElementById("scoreFourOne1st").value, 10) || 0,
    weightedScoreFourOne1st,
    weightFourOne2nd = parseFloat(document.getElementById("weightFourOne2nd").value, 10) || 0,
    scoreFourOne2nd = parseFloat(document.getElementById("scoreFourOne2nd").value, 10) || 0,
    weightedScoreFourOne2nd,
    weightFourOne3rd = parseFloat(document.getElementById("weightFourOne3rd").value, 10) || 0,
    scoreFourOne3rd = parseFloat(document.getElementById("scoreFourOne3rd").value, 10) || 0,
    weightedScoreFourOne3rd,
    weightFourOne4th = parseFloat(document.getElementById("weightFourOne4th").value, 10) || 0,
    scoreFourOne4th = parseFloat(document.getElementById("scoreFourOne4th").value, 10) || 0,
    weightedScoreFourOne4th,
    weightFourTwo1st = parseFloat(document.getElementById("weightFourTwo1st").value, 10) || 0,
    scoreFourTwo1st = parseFloat(document.getElementById("scoreFourTwo1st").value, 10) || 0,
    weightedScoreFourTwo1st,
    weightFourTwo2nd = parseFloat(document.getElementById("weightFourTwo2nd").value, 10) || 0,
    scoreFourTwo2nd = parseFloat(document.getElementById("scoreFourTwo2nd").value, 10) || 0,
    weightedScoreFourTwo2nd,
    weightFourThree1st = parseFloat(document.getElementById("weightFourThree1st").value, 10) || 0,
    scoreFourThree1st = parseFloat(document.getElementById("scoreFourThree1st").value, 10) || 0,
    weightedScoreFourThree1st,
    weightFourThree2nd = parseFloat(document.getElementById("weightFourThree2nd").value, 10) || 0,
    scoreFourThree2nd = parseFloat(document.getElementById("scoreFourThree2nd").value, 10) || 0,
    weightedScoreFourThree2nd,
    weightFourThree3rd = parseFloat(document.getElementById("weightFourThree3rd").value, 10) || 0,
    scoreFourThree3rd = parseFloat(document.getElementById("scoreFourThree3rd").value, 10) || 0,
    weightedScoreFourThree3rd,
    weightFourFour1st = parseFloat(document.getElementById("weightFourFour1st").value, 10) || 0,
    scoreFourFour1st = parseFloat(document.getElementById("scoreFourFour1st").value, 10) || 0,
    weightedScoreFourFour1st,
    weightFourFour2nd = parseFloat(document.getElementById("weightFourFour2nd").value, 10) || 0,
    scoreFourFour2nd = parseFloat(document.getElementById("scoreFourFour2nd").value, 10) || 0,
    weightedScoreFourFour2nd,
    weightFourFive1st = parseFloat(document.getElementById("weightFourFive1st").value, 10) || 0,
    scoreFourFive1st = parseFloat(document.getElementById("scoreFourFive1st").value, 10) || 0,
    weightedScoreFourFive1st,
    weightFourFive2nd = parseFloat(document.getElementById("weightFourFive2nd").value, 10) || 0,
    scoreFourFive2nd = parseFloat(document.getElementById("scoreFourFive2nd").value, 10) || 0,
    weightedScoreFourFive2nd,
    weightFourFive3rd = parseFloat(document.getElementById("weightFourFive3rd").value, 10) || 0,
    scoreFourFive3rd = parseFloat(document.getElementById("scoreFourFive3rd").value, 10) || 0,
    weightedScoreFourFive3rd,
    weightFourSix1st = parseFloat(document.getElementById("weightFourSix1st").value, 10) || 0,
    scoreFourSix1st = parseFloat(document.getElementById("scoreFourSix1st").value, 10) || 0,
    weightedScoreFourSix1st,
    weightFourSix2nd = parseFloat(document.getElementById("weightFourSix2nd").value, 10) || 0,
    scoreFourSix2nd = parseFloat(document.getElementById("scoreFourSix2nd").value, 10) || 0,
    weightedScoreFourSix2nd,
    weightFourSix3rd = parseFloat(document.getElementById("weightFourSix3rd").value, 10) || 0,
    scoreFourSix3rd = parseFloat(document.getElementById("scoreFourSix3rd").value, 10) || 0,
    weightedScoreFourSix3rd,
    weightFourSix4th = parseFloat(document.getElementById("weightFourSix4th").value, 10) || 0,
    scoreFourSix4th = parseFloat(document.getElementById("scoreFourSix4th").value, 10) || 0,
    weightedScoreFourSix4th,
    weightFourSeven1st = parseFloat(document.getElementById("weightFourSeven1st").value, 10) || 0,
    scoreFourSeven1st = parseFloat(document.getElementById("scoreFourSeven1st").value, 10) || 0,
    weightedScoreFourSeven1st,
    weightFourSeven2nd = parseFloat(document.getElementById("weightFourSeven2nd").value, 10) || 0,
    scoreFourSeven2nd = parseFloat(document.getElementById("scoreFourSeven2nd").value, 10) || 0,
    weightedScoreFourSeven2nd,
    weightFiveOne1st = parseFloat(document.getElementById("weightFiveOne1st").value, 10) || 0,
    scoreFiveOne1st = parseFloat(document.getElementById("scoreFiveOne1st").value, 10) || 0,
    weightedScoreFiveOne1st,
    weightFiveOne2nd = parseFloat(document.getElementById("weightFiveOne2nd").value, 10) || 0,
    scoreFiveOne2nd = parseFloat(document.getElementById("scoreFiveOne2nd").value, 10) || 0,
    weightedScoreFiveOne2nd,
    weightFiveTwo1st = parseFloat(document.getElementById("weightFiveTwo1st").value, 10) || 0,
    scoreFiveTwo1st = parseFloat(document.getElementById("scoreFiveTwo1st").value, 10) || 0,
    weightedScoreFiveTwo1st,
    weightFiveTwo2nd = parseFloat(document.getElementById("weightFiveTwo2nd").value, 10) || 0,
    scoreFiveTwo2nd = parseFloat(document.getElementById("scoreFiveTwo2nd").value, 10) || 0,
    weightedScoreFiveTwo2nd,
    weightFiveTwo3rd = parseFloat(document.getElementById("weightFiveTwo3rd").value, 10) || 0,
    scoreFiveTwo3rd = parseFloat(document.getElementById("scoreFiveTwo3rd").value, 10) || 0,
    weightedScoreFiveTwo3rd,
    weightFiveThree1st = parseFloat(document.getElementById("weightFiveThree1st").value, 10) || 0,
    scoreFiveThree1st = parseFloat(document.getElementById("scoreFiveThree1st").value, 10) || 0,
    weightedScoreFiveThree1st,
    weightFiveThree2nd = parseFloat(document.getElementById("weightFiveThree2nd").value, 10) || 0,
    scoreFiveThree2nd = parseFloat(document.getElementById("scoreFiveThree2nd").value, 10) || 0,
    weightedScoreFiveThree2nd,
    weightFiveThree3rd = parseFloat(document.getElementById("weightFiveThree3rd").value, 10) || 0,
    scoreFiveThree3rd = parseFloat(document.getElementById("scoreFiveThree3rd").value, 10) || 0,
    weightedScoreFiveThree3rd,
    weightFiveThree4th = parseFloat(document.getElementById("weightFiveThree4th").value, 10) || 0,
    scoreFiveThree4th = parseFloat(document.getElementById("scoreFiveThree4th").value, 10) || 0,
    weightedScoreFiveThree4th,
    weightFiveFour1st = parseFloat(document.getElementById("weightFiveFour1st").value, 10) || 0,
    scoreFiveFour1st = parseFloat(document.getElementById("scoreFiveFour1st").value, 10) || 0,
    weightedScoreFiveFour1st,
    weightFiveFour2nd = parseFloat(document.getElementById("weightFiveFour2nd").value, 10) || 0,
    scoreFiveFour2nd = parseFloat(document.getElementById("scoreFiveFour2nd").value, 10) || 0,
    weightedScoreFiveFour2nd,
    weightFiveFour3rd = parseFloat(document.getElementById("weightFiveFour3rd").value, 10) || 0,
    scoreFiveFour3rd = parseFloat(document.getElementById("scoreFiveFour3rd").value, 10) || 0,
    weightedScoreFiveFour3rd,
    weightFiveFour4th = parseFloat(document.getElementById("weightFiveFour4th").value, 10) || 0,
    scoreFiveFour4th = parseFloat(document.getElementById("scoreFiveFour4th").value, 10) || 0,
    weightedScoreFiveFour4th,
    weightFiveFive1st = parseFloat(document.getElementById("weightFiveFive1st").value, 10) || 0,
    scoreFiveFive1st = parseFloat(document.getElementById("scoreFiveFive1st").value, 10) || 0,
    weightedScoreFiveFive1st,
    weightFiveFive2nd = parseFloat(document.getElementById("weightFiveFive2nd").value, 10) || 0,
    scoreFiveFive2nd = parseFloat(document.getElementById("scoreFiveFive2nd").value, 10) || 0,
    weightedScoreFiveFive2nd,
    weightFiveFive3rd = parseFloat(document.getElementById("weightFiveFive3rd").value, 10) || 0,
    scoreFiveFive3rd = parseFloat(document.getElementById("scoreFiveFive3rd").value, 10) || 0,
    weightedScoreFiveFive3rd,
    weightFiveSix1st = parseFloat(document.getElementById("weightFiveSix1st").value, 10) || 0,
    scoreFiveSix1st = parseFloat(document.getElementById("scoreFiveSix1st").value, 10) || 0,
    weightedScoreFiveSix1st,
    weightFiveSix2nd = parseFloat(document.getElementById("weightFiveSix2nd").value, 10) || 0,
    scoreFiveSix2nd = parseFloat(document.getElementById("scoreFiveSix2nd").value, 10) || 0,
    weightedScoreFiveSix2nd,
    weightFiveSix3rd = parseFloat(document.getElementById("weightFiveSix3rd").value, 10) || 0,
    scoreFiveSix3rd = parseFloat(document.getElementById("scoreFiveSix3rd").value, 10) || 0,
    weightedScoreFiveSix3rd,
    weightFiveSix4th = parseFloat(document.getElementById("weightFiveSix4th").value, 10) || 0,
    scoreFiveSix4th = parseFloat(document.getElementById("scoreFiveSix4th").value, 10) || 0,
    weightedScoreFiveSix4th,
    weightElevenTwo1st = parseFloat(document.getElementById("weightElevenTwo1st").value, 10) || 0,
    scoreElevenTwo1st = parseFloat(document.getElementById("scoreElevenTwo1st").value, 10) || 0,
    weightedScoreElevenTwo1st,
    weightElevenTwo2nd = parseFloat(document.getElementById("weightElevenTwo2nd").value, 10) || 0,
    scoreElevenTwo2nd = parseFloat(document.getElementById("scoreElevenTwo2nd").value, 10) || 0,
    weightedScoreElevenTwo2nd,
    sumWeightsMLM,
    sumWeightedScoresMLM,
    currentGradeMLM,
    cumulativeGradeMLM;

  weightedScoreTwoOne1st = weightTwoOne1st * scoreTwoOne1st;
  document.getElementById("weightedScoreTwoOne1st").value = weightedScoreTwoOne1st;

  weightedScoreTwoOne2nd = weightTwoOne2nd * scoreTwoOne2nd;
  document.getElementById("weightedScoreTwoOne2nd").value = weightedScoreTwoOne2nd;

  weightedScoreTwoOne3rd = weightTwoOne3rd * scoreTwoOne3rd;
  document.getElementById("weightedScoreTwoOne3rd").value = weightedScoreTwoOne3rd;

  weightedScoreTwoOne4th = weightTwoOne4th * scoreTwoOne4th;
  document.getElementById("weightedScoreTwoOne4th").value = weightedScoreTwoOne4th;

  weightedScoreTwoOne5th = weightTwoOne5th * scoreTwoOne5th;
  document.getElementById("weightedScoreTwoOne5th").value = weightedScoreTwoOne5th;

  weightedScoreTwoOne6th = weightTwoOne6th * scoreTwoOne6th;
  document.getElementById("weightedScoreTwoOne6th").value = weightedScoreTwoOne6th;

  weightedScoreTwoTwo1st = weightTwoTwo1st * scoreTwoTwo1st;
  document.getElementById("weightedScoreTwoTwo1st").value = weightedScoreTwoTwo1st;

  weightedScoreTwoTwo2nd = weightTwoTwo2nd * scoreTwoTwo2nd;
  document.getElementById("weightedScoreTwoTwo2nd").value = weightedScoreTwoTwo2nd;

  weightedScoreTwoThree1st = weightTwoThree1st * scoreTwoThree1st;
  document.getElementById("weightedScoreTwoThree1st").value = weightedScoreTwoThree1st;

  weightedScoreTwoThree2nd = weightTwoThree2nd * scoreTwoThree2nd;
  document.getElementById("weightedScoreTwoThree2nd").value = weightedScoreTwoThree2nd;

  weightedScoreTwoThree3rd = weightTwoThree3rd * scoreTwoThree3rd;
  document.getElementById("weightedScoreTwoThree3rd").value = weightedScoreTwoThree3rd;

  weightedScoreTwoFour1st = weightTwoFour1st * scoreTwoFour1st;
  document.getElementById("weightedScoreTwoFour1st").value = weightedScoreTwoFour1st;

  weightedScoreTwoFour2nd = weightTwoFour2nd * scoreTwoFour2nd;
  document.getElementById("weightedScoreTwoFour2nd").value = weightedScoreTwoFour2nd;

  weightedScoreTwoFour3rd = weightTwoFour3rd * scoreTwoFour3rd;
  document.getElementById("weightedScoreTwoFour3rd").value = weightedScoreTwoFour3rd;

  weightedScoreTwoFive1st = weightTwoFive1st * scoreTwoFive1st;
  document.getElementById("weightedScoreTwoFive1st").value = weightedScoreTwoFive1st;

  weightedScoreTwoFive2nd = weightTwoFive2nd * scoreTwoFive2nd;
  document.getElementById("weightedScoreTwoFive2nd").value = weightedScoreTwoFive2nd;

  weightedScoreTwoFive3rd = weightTwoFive3rd * scoreTwoFive3rd;
  document.getElementById("weightedScoreTwoFive3rd").value = weightedScoreTwoFive3rd;

  weightedScoreTwoFive4th = weightTwoFive4th * scoreTwoFive4th;
  document.getElementById("weightedScoreTwoFive4th").value = weightedScoreTwoFive4th;

  weightedScoreTwoSix = weightTwoSix * scoreTwoSix;
  document.getElementById("weightedScoreTwoSix").value = weightedScoreTwoSix;

  weightedScoreThreeOne1st = weightThreeOne1st * scoreThreeOne1st;
  document.getElementById("weightedScoreThreeOne1st").value = weightedScoreThreeOne1st;

  weightedScoreThreeOne2nd = weightThreeOne2nd * scoreThreeOne2nd;
  document.getElementById("weightedScoreThreeOne2nd").value = weightedScoreThreeOne2nd;

  weightedScoreThreeTwo = weightThreeTwo * scoreThreeTwo;
  document.getElementById("weightedScoreThreeTwo").value = weightedScoreThreeTwo;

  weightedScoreThreeThree1st = weightThreeThree1st * scoreThreeThree1st;
  document.getElementById("weightedScoreThreeThree1st").value = weightedScoreThreeThree1st;

  weightedScoreThreeThree2nd = weightThreeThree2nd * scoreThreeThree2nd;
  document.getElementById("weightedScoreThreeThree2nd").value = weightedScoreThreeThree2nd;

  weightedScoreThreeThree3rd = weightThreeThree3rd * scoreThreeThree3rd;
  document.getElementById("weightedScoreThreeThree3rd").value = weightedScoreThreeThree3rd;

  weightedScoreThreeThree4th = weightThreeThree4th * scoreThreeThree4th;
  document.getElementById("weightedScoreThreeThree4th").value = weightedScoreThreeThree4th;

  weightedScoreThreeThree5th = weightThreeThree5th * scoreThreeThree5th;
  document.getElementById("weightedScoreThreeThree5th").value = weightedScoreThreeThree5th;

  weightedScoreThreeFour = weightThreeFour * scoreThreeFour;
  document.getElementById("weightedScoreThreeFour").value = weightedScoreThreeFour;

  weightedScoreThreeFive = weightThreeFive * scoreThreeFive;
  document.getElementById("weightedScoreThreeFive").value = weightedScoreThreeFive;

  weightedScoreFourOne1st = weightFourOne1st * scoreFourOne1st;
  document.getElementById("weightedScoreFourOne1st").value = weightedScoreFourOne1st;

  weightedScoreFourOne2nd = weightFourOne2nd * scoreFourOne2nd;
  document.getElementById("weightedScoreFourOne2nd").value = weightedScoreFourOne2nd;

  weightedScoreFourOne3rd = weightFourOne3rd * scoreFourOne3rd;
  document.getElementById("weightedScoreFourOne3rd").value = weightedScoreFourOne3rd;

  weightedScoreFourOne4th = weightFourOne4th * scoreFourOne4th;
  document.getElementById("weightedScoreFourOne4th").value = weightedScoreFourOne4th;

  weightedScoreFourTwo1st = weightFourTwo1st * scoreFourTwo1st;
  document.getElementById("weightedScoreFourTwo1st").value = weightedScoreFourTwo1st;

  weightedScoreFourTwo2nd = weightFourTwo2nd * scoreFourTwo2nd;
  document.getElementById("weightedScoreFourTwo2nd").value = weightedScoreFourTwo2nd;

  weightedScoreFourThree1st = weightFourThree1st * scoreFourThree1st;
  document.getElementById("weightedScoreFourThree1st").value = weightedScoreFourThree1st;

  weightedScoreFourThree2nd = weightFourThree2nd * scoreFourThree2nd;
  document.getElementById("weightedScoreFourThree2nd").value = weightedScoreFourThree2nd;

  weightedScoreFourThree3rd = weightFourThree3rd * scoreFourThree3rd;
  document.getElementById("weightedScoreFourThree3rd").value = weightedScoreFourThree3rd;

  weightedScoreFourFour1st = weightFourFour1st * scoreFourFour1st;
  document.getElementById("weightedScoreFourFour1st").value = weightedScoreFourFour1st;

  weightedScoreFourFour2nd = weightFourFour2nd * scoreFourFour2nd;
  document.getElementById("weightedScoreFourFour2nd").value = weightedScoreFourFour2nd;

  weightedScoreFourFive1st = weightFourFive1st * scoreFourFive1st;
  document.getElementById("weightedScoreFourFive1st").value = weightedScoreFourFive1st;

  weightedScoreFourFive2nd = weightFourFive2nd * scoreFourFive2nd;
  document.getElementById("weightedScoreFourFive2nd").value = weightedScoreFourFive2nd;

  weightedScoreFourFive3rd = weightFourFive3rd * scoreFourFive3rd;
  document.getElementById("weightedScoreFourFive3rd").value = weightedScoreFourFive3rd;

  weightedScoreFourSix1st = weightFourSix1st * scoreFourSix1st;
  document.getElementById("weightedScoreFourSix1st").value = weightedScoreFourSix1st;

  weightedScoreFourSix2nd = weightFourSix2nd * scoreFourSix2nd;
  document.getElementById("weightedScoreFourSix2nd").value = weightedScoreFourSix2nd;

  weightedScoreFourSix3rd = weightFourSix3rd * scoreFourSix3rd;
  document.getElementById("weightedScoreFourSix3rd").value = weightedScoreFourSix3rd;

  weightedScoreFourSix4th = weightFourSix4th * scoreFourSix4th;
  document.getElementById("weightedScoreFourSix4th").value = weightedScoreFourSix4th;

  weightedScoreFourSeven1st = weightFourSeven1st * scoreFourSeven1st;
  document.getElementById("weightedScoreFourSeven1st").value = weightedScoreFourSeven1st;

  weightedScoreFourSeven2nd = weightFourSeven2nd * scoreFourSeven2nd;
  document.getElementById("weightedScoreFourSeven2nd").value = weightedScoreFourSeven2nd;

  weightedScoreFiveOne1st = weightFiveOne1st * scoreFiveOne1st;
  document.getElementById("weightedScoreFiveOne1st").value = weightedScoreFiveOne1st;

  weightedScoreFiveOne2nd = weightFiveOne2nd * scoreFiveOne2nd;
  document.getElementById("weightedScoreFiveOne2nd").value = weightedScoreFiveOne2nd;

  weightedScoreFiveTwo1st = weightFiveTwo1st * scoreFiveTwo1st;
  document.getElementById("weightedScoreFiveTwo1st").value = weightedScoreFiveTwo1st;

  weightedScoreFiveTwo2nd = weightFiveTwo2nd * scoreFiveTwo2nd;
  document.getElementById("weightedScoreFiveTwo2nd").value = weightedScoreFiveTwo2nd;

  weightedScoreFiveTwo3rd = weightFiveTwo3rd * scoreFiveTwo3rd;
  document.getElementById("weightedScoreFiveTwo3rd").value = weightedScoreFiveTwo3rd;

  weightedScoreFiveThree1st = weightFiveThree1st * scoreFiveThree1st;
  document.getElementById("weightedScoreFiveThree1st").value = weightedScoreFiveThree1st;

  weightedScoreFiveThree2nd = weightFiveThree2nd * scoreFiveThree2nd;
  document.getElementById("weightedScoreFiveThree2nd").value = weightedScoreFiveThree2nd;

  weightedScoreFiveThree3rd = weightFiveThree3rd * scoreFiveThree3rd;
  document.getElementById("weightedScoreFiveThree3rd").value = weightedScoreFiveThree3rd;

  weightedScoreFiveThree4th = weightFiveThree4th * scoreFiveThree4th;
  document.getElementById("weightedScoreFiveThree4th").value = weightedScoreFiveThree4th;

  weightedScoreFiveFour1st = weightFiveFour1st * scoreFiveFour1st;
  document.getElementById("weightedScoreFiveFour1st").value = weightedScoreFiveFour1st;

  weightedScoreFiveFour2nd = weightFiveFour2nd * scoreFiveFour2nd;
  document.getElementById("weightedScoreFiveFour2nd").value = weightedScoreFiveFour2nd;

  weightedScoreFiveFour3rd = weightFiveFour3rd * scoreFiveFour3rd;
  document.getElementById("weightedScoreFiveFour3rd").value = weightedScoreFiveFour3rd;

  weightedScoreFiveFour4th = weightFiveFour4th * scoreFiveFour4th;
  document.getElementById("weightedScoreFiveFour4th").value = weightedScoreFiveFour4th;

  weightedScoreFiveFive1st = weightFiveFive1st * scoreFiveFive1st;
  document.getElementById("weightedScoreFiveFive1st").value = weightedScoreFiveFive1st;

  weightedScoreFiveFive2nd = weightFiveFive2nd * scoreFiveFive2nd;
  document.getElementById("weightedScoreFiveFive2nd").value = weightedScoreFiveFive2nd;

  weightedScoreFiveFive3rd = weightFiveFive3rd * scoreFiveFive3rd;
  document.getElementById("weightedScoreFiveFive3rd").value = weightedScoreFiveFive3rd;

  weightedScoreFiveSix1st = weightFiveSix1st * scoreFiveSix1st;
  document.getElementById("weightedScoreFiveSix1st").value = weightedScoreFiveSix1st;

  weightedScoreFiveSix2nd = weightFiveSix2nd * scoreFiveSix2nd;
  document.getElementById("weightedScoreFiveSix2nd").value = weightedScoreFiveSix2nd;

  weightedScoreFiveSix3rd = weightFiveSix3rd * scoreFiveSix3rd;
  document.getElementById("weightedScoreFiveSix3rd").value = weightedScoreFiveSix3rd;

  weightedScoreFiveSix4th = weightFiveSix4th * scoreFiveSix4th;
  document.getElementById("weightedScoreFiveSix4th").value = weightedScoreFiveSix4th;

  weightedScoreElevenTwo1st = weightElevenTwo1st * scoreElevenTwo1st;
  document.getElementById("weightedScoreElevenTwo1st").value = weightedScoreElevenTwo1st;

  weightedScoreElevenTwo2nd = weightElevenTwo2nd * scoreElevenTwo2nd;
  document.getElementById("weightedScoreElevenTwo2nd").value = weightedScoreElevenTwo2nd;

  sumWeightsMLM =
    weightTwoOne1st +
    weightTwoOne2nd +
    weightTwoOne3rd +
    weightTwoOne4th +
    weightTwoOne5th +
    weightTwoOne6th +
    weightTwoTwo1st +
    weightTwoTwo2nd +
    weightTwoThree1st +
    weightTwoThree2nd +
    weightTwoThree3rd +
    weightTwoFour1st +
    weightTwoFour2nd +
    weightTwoFour3rd +
    weightTwoFive1st +
    weightTwoFive2nd +
    weightTwoFive3rd +
    weightTwoFive4th +
    weightTwoSix +
    weightThreeOne1st +
    weightThreeOne2nd +
    weightThreeTwo +
    weightThreeThree1st +
    weightThreeThree2nd +
    weightThreeThree3rd +
    weightThreeThree4th +
    weightThreeThree5th +
    weightThreeFour +
    weightThreeFive +
    weightFourOne1st +
    weightFourOne2nd +
    weightFourOne3rd +
    weightFourOne4th +
    weightFourTwo1st +
    weightFourTwo2nd +
    weightFourThree1st +
    weightFourThree2nd +
    weightFourThree3rd +
    weightFourFour1st +
    weightFourFour2nd +
    weightFourFive1st +
    weightFourFive2nd +
    weightFourFive3rd +
    weightFourSix1st +
    weightFourSix2nd +
    weightFourSix3rd +
    weightFourSix4th +
    weightFourSeven1st +
    weightFourSeven2nd +
    weightFiveOne1st +
    weightFiveOne2nd +
    weightFiveTwo1st +
    weightFiveTwo2nd +
    weightFiveTwo3rd +
    weightFiveThree1st +
    weightFiveThree2nd +
    weightFiveThree3rd +
    weightFiveThree4th +
    weightFiveFour1st +
    weightFiveFour2nd +
    weightFiveFour3rd +
    weightFiveFour4th +
    weightFiveFive1st +
    weightFiveFive2nd +
    weightFiveFive3rd +
    weightFiveSix1st +
    weightFiveSix2nd +
    weightFiveSix3rd +
    weightFiveSix4th +
    weightElevenTwo1st +
    weightElevenTwo2nd;

  document.getElementById("sumWeightsMLM").value = sumWeightsMLM;

  sumWeightedScoresMLM =
    weightedScoreTwoOne1st +
    weightedScoreTwoOne2nd +
    weightedScoreTwoOne3rd +
    weightedScoreTwoOne4th +
    weightedScoreTwoOne5th +
    weightedScoreTwoOne6th +
    weightedScoreTwoTwo1st +
    weightedScoreTwoTwo2nd +
    weightedScoreTwoThree1st +
    weightedScoreTwoThree2nd +
    weightedScoreTwoThree3rd +
    weightedScoreTwoFour1st +
    weightedScoreTwoFour2nd +
    weightedScoreTwoFour3rd +
    weightedScoreTwoFive1st +
    weightedScoreTwoFive2nd +
    weightedScoreTwoFive3rd +
    weightedScoreTwoFive4th +
    weightedScoreTwoSix +
    weightedScoreThreeOne1st +
    weightedScoreThreeOne2nd +
    weightedScoreThreeTwo +
    weightedScoreThreeThree1st +
    weightedScoreThreeThree2nd +
    weightedScoreThreeThree3rd +
    weightedScoreThreeThree4th +
    weightedScoreThreeThree5th +
    weightedScoreThreeFour +
    weightedScoreThreeFive +
    weightedScoreFourOne1st +
    weightedScoreFourOne2nd +
    weightedScoreFourOne3rd +
    weightedScoreFourOne4th +
    weightedScoreFourTwo1st +
    weightedScoreFourTwo2nd +
    weightedScoreFourThree1st +
    weightedScoreFourThree2nd +
    weightedScoreFourThree3rd +
    weightedScoreFourFour1st +
    weightedScoreFourFour2nd +
    weightedScoreFourFive1st +
    weightedScoreFourFive2nd +
    weightedScoreFourFive3rd +
    weightedScoreFourSix1st +
    weightedScoreFourSix2nd +
    weightedScoreFourSix3rd +
    weightedScoreFourSix4th +
    weightedScoreFourSeven1st +
    weightedScoreFourSeven2nd +
    weightedScoreFiveOne1st +
    weightedScoreFiveOne2nd +
    weightedScoreFiveTwo1st +
    weightedScoreFiveTwo2nd +
    weightedScoreFiveTwo3rd +
    weightedScoreFiveThree1st +
    weightedScoreFiveThree2nd +
    weightedScoreFiveThree3rd +
    weightedScoreFiveThree4th +
    weightedScoreFiveFour1st +
    weightedScoreFiveFour2nd +
    weightedScoreFiveFour3rd +
    weightedScoreFiveFour4th +
    weightedScoreFiveFive1st +
    weightedScoreFiveFive2nd +
    weightedScoreFiveFive3rd +
    weightedScoreFiveSix1st +
    weightedScoreFiveSix2nd +
    weightedScoreFiveSix3rd +
    weightedScoreFiveSix4th +
    weightedScoreElevenTwo1st +
    weightedScoreElevenTwo2nd;

  document.getElementById("sumWeightedScoresMLM").value = sumWeightedScoresMLM;

  currentGradeMLM = sumWeightedScoresMLM / sumWeightsMLM;

  document.getElementById("currentGradeMLM").value = currentGradeMLM;

  cumulativeGradeMLM = sumWeightedScoresMLM / 100;

  document.getElementById("cumulativeGradeMLM").value = cumulativeGradeMLM;
}
// End MTH 161 MLM Grade Calculations

/* 
  MTH 161
  Given: student scores
  To Calculate: the current grade and the cumulative grade
*/

document.getElementById("gradeCourse").addEventListener("submit", gradeCourse);

function gradeCourse(event) {
  event.preventDefault();
  event.stopPropagation();

  var weightMLM = parseFloat(document.getElementById("weightMLM").value, 10) || 0,
    scoreMLM = parseFloat(document.getElementById("scoreMLM").value, 10) || 0,
    weightedScoreMLM,
    weightTest1 = +parseFloat(document.getElementById("weightTest1").value, 10) || 0,
    scoreTest1 = +parseFloat(document.getElementById("scoreTest1").value, 10) || 0,
    weightedScoreTest1,
    weightTest2 = +parseFloat(document.getElementById("weightTest2").value, 10) || 0,
    scoreTest2 = +parseFloat(document.getElementById("scoreTest2").value, 10) || 0,
    weightedScoreTest2,
    weightTest3 = +parseFloat(document.getElementById("weightTest3").value, 10) || 0,
    scoreTest3 = +parseFloat(document.getElementById("scoreTest3").value, 10) || 0,
    weightedScoreTest3,
    weightProject = +parseFloat(document.getElementById("weightProject").value, 10) || 0,
    scoreProject = +parseFloat(document.getElementById("scoreProject").value, 10) || 0,
    weightedScoreProject,
    weightFinalExam = +parseFloat(document.getElementById("weightFinalExam").value, 10) || 0,
    scoreFinalExam = +parseFloat(document.getElementById("scoreFinalExam").value, 10) || 0,
    weightedScoreFinalExam,
    sumWeightsCourse,
    sumWeightedScoresCourse,
    currentGradeCourse,
    cumulativeGradeCourse;

  weightedScoreMLM = weightMLM * scoreMLM;
  document.getElementById("weightedScoreMLM").value = weightedScoreMLM;

  weightedScoreTest1 = weightTest1 * scoreTest1;
  document.getElementById("weightedScoreTest1").value = weightedScoreTest1;

  weightedScoreTest2 = weightTest2 * scoreTest2;
  document.getElementById("weightedScoreTest2").value = weightedScoreTest2;

  weightedScoreTest3 = weightTest3 * scoreTest3;
  document.getElementById("weightedScoreTest3").value = weightedScoreTest3;

  weightedScoreProject = weightProject * scoreProject;
  document.getElementById("weightedScoreProject").value = weightedScoreProject;

  weightedScoreFinalExam = weightFinalExam * scoreFinalExam;
  document.getElementById("weightedScoreFinalExam").value = weightedScoreFinalExam;

  sumWeightsCourse =
    weightMLM + weightTest1 + weightTest2 + weightTest3 + weightProject + weightFinalExam;

  document.getElementById("sumWeightsCourse").value = sumWeightsCourse;

  sumWeightedScoresCourse =
    weightedScoreMLM +
    weightedScoreTest1 +
    weightedScoreTest2 +
    weightedScoreTest3 +
    weightedScoreProject +
    weightedScoreFinalExam;

  document.getElementById("sumWeightedScoresCourse").value = sumWeightedScoresCourse;

  currentGradeCourse = sumWeightedScoresCourse / sumWeightsCourse;

  document.getElementById("currentGradeCourse").value = currentGradeCourse;

  cumulativeGradeCourse = sumWeightedScoresCourse / 100;

  document.getElementById("cumulativeGradeCourse").value = cumulativeGradeCourse;
}
// End MTH 161 Course Grade Calculations
