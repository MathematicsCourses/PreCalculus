/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    
    
    https://mathematicscourses.github.io/PreCalculus/IntermediateAlgebra/Algebra.html
    https://mathematicscourses.github.io/PreCalculus/IntermediateAlgebra/GradeCalculator.html
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

  var weightTopicOne = parseFloat(document.getElementById("weightTopicOne").value, 10) || 0,
    scoreTopicOne = parseFloat(document.getElementById("scoreTopicOne").value, 10) || 0,
    weightedScoreTopicOne,
    weightTopicTwo = +parseFloat(document.getElementById("weightTopicTwo").value, 10) || 0,
    scoreTopicTwo = +parseFloat(document.getElementById("scoreTopicTwo").value, 10) || 0,
    weightedScoreTopicTwo,
    weightTopicThree = +parseFloat(document.getElementById("weightTopicThree").value, 10) || 0,
    scoreTopicThree = +parseFloat(document.getElementById("scoreTopicThree").value, 10) || 0,
    weightedScoreTopicThree,
    weightTopicFour = +parseFloat(document.getElementById("weightTopicFour").value, 10) || 0,
    scoreTopicFour = +parseFloat(document.getElementById("scoreTopicFour").value, 10) || 0,
    weightedScoreTopicFour,
    weightTopicFive = +parseFloat(document.getElementById("weightTopicFive").value, 10) || 0,
    scoreTopicFive = +parseFloat(document.getElementById("scoreTopicFive").value, 10) || 0,
    weightedScoreTopicFive,
    weightTopicSix = +parseFloat(document.getElementById("weightTopicSix").value, 10) || 0,
    scoreTopicSix = +parseFloat(document.getElementById("scoreTopicSix").value, 10) || 0,
    weightedScoreTopicSix,
    weightTopicSeven = +parseFloat(document.getElementById("weightTopicSeven").value, 10) || 0,
    scoreTopicSeven = +parseFloat(document.getElementById("scoreTopicSeven").value, 10) || 0,
    weightedScoreTopicSeven,
    weightTopicEight = +parseFloat(document.getElementById("weightTopicEight").value, 10) || 0,
    scoreTopicEight = +parseFloat(document.getElementById("scoreTopicEight").value, 10) || 0,
    weightedScoreTopicEight,
    weightTopicNine = +parseFloat(document.getElementById("weightTopicNine").value, 10) || 0,
    scoreTopicNine = +parseFloat(document.getElementById("scoreTopicNine").value, 10) || 0,
    weightedScoreTopicNine,
    weightTopicTen = +parseFloat(document.getElementById("weightTopicTen").value, 10) || 0,
    scoreTopicTen = +parseFloat(document.getElementById("scoreTopicTen").value, 10) || 0,
    weightedScoreTopicTen,
    weightTopicEleven = +parseFloat(document.getElementById("weightTopicEleven").value, 10) || 0,
    scoreTopicEleven = +parseFloat(document.getElementById("scoreTopicEleven").value, 10) || 0,
    weightedScoreTopicEleven,
    weightTopicTwelve = +parseFloat(document.getElementById("weightTopicTwelve").value, 10) || 0,
    scoreTopicTwelve = +parseFloat(document.getElementById("scoreTopicTwelve").value, 10) || 0,
    weightedScoreTopicTwelve,
    weightTopicThirteen =
      +parseFloat(document.getElementById("weightTopicThirteen").value, 10) || 0,
    scoreTopicThirteen = +parseFloat(document.getElementById("scoreTopicThirteen").value, 10) || 0,
    weightedScoreTopicThirteen,
    weightTopicFourteen =
      +parseFloat(document.getElementById("weightTopicFourteen").value, 10) || 0,
    scoreTopicFourteen = +parseFloat(document.getElementById("scoreTopicFourteen").value, 10) || 0,
    weightedScoreTopicFourteen,
    weightTopicFifteen = +parseFloat(document.getElementById("weightTopicFifteen").value, 10) || 0,
    scoreTopicFifteen = +parseFloat(document.getElementById("scoreTopicFifteen").value, 10) || 0,
    weightedScoreTopicFifteen,
    weightTopicSixteen = +parseFloat(document.getElementById("weightTopicSixteen").value, 10) || 0,
    scoreTopicSixteen = +parseFloat(document.getElementById("scoreTopicSixteen").value, 10) || 0,
    weightedScoreTopicSixteen,
    weightTopicSeventeen =
      +parseFloat(document.getElementById("weightTopicSeventeen").value, 10) || 0,
    scoreTopicSeventeen =
      +parseFloat(document.getElementById("scoreTopicSeventeen").value, 10) || 0,
    weightedScoreTopicSeventeen,
    weightTopicEighteen =
      +parseFloat(document.getElementById("weightTopicEighteen").value, 10) || 0,
    scoreTopicEighteen = +parseFloat(document.getElementById("scoreTopicEighteen").value, 10) || 0,
    weightedScoreTopicEighteen,
    weightTopicNineteen =
      +parseFloat(document.getElementById("weightTopicNineteen").value, 10) || 0,
    scoreTopicNineteen = +parseFloat(document.getElementById("scoreTopicNineteen").value, 10) || 0,
    weightedScoreTopicNineteen,
    weightTopicTwenty = +parseFloat(document.getElementById("weightTopicTwenty").value, 10) || 0,
    scoreTopicTwenty = +parseFloat(document.getElementById("scoreTopicTwenty").value, 10) || 0,
    weightedScoreTopicTwenty,
    weightTopicTwentyOne =
      +parseFloat(document.getElementById("weightTopicTwentyOne").value, 10) || 0,
    scoreTopicTwentyOne =
      +parseFloat(document.getElementById("scoreTopicTwentyOne").value, 10) || 0,
    weightedScoreTopicTwentyOne,
    weightTopicTwentyTwo =
      +parseFloat(document.getElementById("weightTopicTwentyTwo").value, 10) || 0,
    scoreTopicTwentyTwo =
      +parseFloat(document.getElementById("scoreTopicTwentyTwo").value, 10) || 0,
    weightedScoreTopicTwentyTwo,
    weightTopicTwentyThree =
      +parseFloat(document.getElementById("weightTopicTwentyThree").value, 10) || 0,
    scoreTopicTwentyThree =
      +parseFloat(document.getElementById("scoreTopicTwentyThree").value, 10) || 0,
    weightedScoreTopicTwentyThree,
    weightTopicTwentyThree =
      +parseFloat(document.getElementById("weightTopicTwentyThree").value, 10) || 0,
    scoreTopicTwentyThree =
      +parseFloat(document.getElementById("scoreTopicTwentyThree").value, 10) || 0,
    weightedScoreTopicTwentyThree,
    weightTopicTwentyFour =
      +parseFloat(document.getElementById("weightTopicTwentyFour").value, 10) || 0,
    scoreTopicTwentyFour =
      +parseFloat(document.getElementById("scoreTopicTwentyFour").value, 10) || 0,
    weightedScoreTopicTwentyFour,
    weightTopicTwentyFive =
      +parseFloat(document.getElementById("weightTopicTwentyFive").value, 10) || 0,
    scoreTopicTwentyFive =
      +parseFloat(document.getElementById("scoreTopicTwentyFive").value, 10) || 0,
    weightedScoreTopicTwentyFive,
    weightTopicTwentySix =
      +parseFloat(document.getElementById("weightTopicTwentySix").value, 10) || 0,
    scoreTopicTwentySix =
      +parseFloat(document.getElementById("scoreTopicTwentySix").value, 10) || 0,
    weightedScoreTopicTwentySix,
    weightTopicTwentySeven =
      +parseFloat(document.getElementById("weightTopicTwentySeven").value, 10) || 0,
    scoreTopicTwentySeven =
      +parseFloat(document.getElementById("scoreTopicTwentySeven").value, 10) || 0,
    weightedScoreTopicTwentySeven,
    weightTopicTwentyEight =
      +parseFloat(document.getElementById("weightTopicTwentyEight").value, 10) || 0,
    scoreTopicTwentyEight =
      +parseFloat(document.getElementById("scoreTopicTwentyEight").value, 10) || 0,
    weightedScoreTopicTwentyEight,
    weightTopicTwentyNine =
      +parseFloat(document.getElementById("weightTopicTwentyNine").value, 10) || 0,
    scoreTopicTwentyNine =
      +parseFloat(document.getElementById("scoreTopicTwentyNine").value, 10) || 0,
    weightedScoreTopicTwentyNine,
    weightTopicThirty = +parseFloat(document.getElementById("weightTopicThirty").value, 10) || 0,
    scoreTopicThirty = +parseFloat(document.getElementById("scoreTopicThirty").value, 10) || 0,
    weightedScoreTopicThirty,
    weightTopicThirtyOne =
      +parseFloat(document.getElementById("weightTopicThirtyOne").value, 10) || 0,
    scoreTopicThirtyOne =
      +parseFloat(document.getElementById("scoreTopicThirtyOne").value, 10) || 0,
    weightedScoreTopicThirtyOne,
    sumWeightsMLM,
    sumWeightedScoresMLM,
    currentGradeMLM,
    cumulativeGradeMLM;

  weightedScoreTopicOne = weightTopicOne * scoreTopicOne;
  document.getElementById("weightedScoreTopicOne").value = weightedScoreTopicOne;

  weightedScoreTopicTwo = weightTopicTwo * scoreTopicTwo;
  document.getElementById("weightedScoreTopicTwo").value = weightedScoreTopicTwo;

  weightedScoreTopicThree = weightTopicThree * scoreTopicThree;
  document.getElementById("weightedScoreTopicThree").value = weightedScoreTopicThree;

  weightedScoreTopicFour = weightTopicFour * scoreTopicFour;
  document.getElementById("weightedScoreTopicFour").value = weightedScoreTopicFour;

  weightedScoreTopicFive = weightTopicFive * scoreTopicFive;
  document.getElementById("weightedScoreTopicFive").value = weightedScoreTopicFive;

  weightedScoreTopicSix = weightTopicSix * scoreTopicSix;
  document.getElementById("weightedScoreTopicSix").value = weightedScoreTopicSix;

  weightedScoreTopicSeven = weightTopicSeven * scoreTopicSeven;
  document.getElementById("weightedScoreTopicSeven").value = weightedScoreTopicSeven;

  weightedScoreTopicEight = weightTopicEight * scoreTopicEight;
  document.getElementById("weightedScoreTopicEight").value = weightedScoreTopicEight;

  weightedScoreTopicNine = weightTopicNine * scoreTopicNine;
  document.getElementById("weightedScoreTopicNine").value = weightedScoreTopicNine;

  weightedScoreTopicTen = weightTopicTen * scoreTopicTen;
  document.getElementById("weightedScoreTopicTen").value = weightedScoreTopicTen;

  weightedScoreTopicEleven = weightTopicEleven * scoreTopicEleven;
  document.getElementById("weightedScoreTopicEleven").value = weightedScoreTopicEleven;

  weightedScoreTopicTwelve = weightTopicTwelve * scoreTopicTwelve;
  document.getElementById("weightedScoreTopicTwelve").value = weightedScoreTopicTwelve;

  weightedScoreTopicThirteen = weightTopicThirteen * scoreTopicThirteen;
  document.getElementById("weightedScoreTopicThirteen").value = weightedScoreTopicThirteen;

  weightedScoreTopicFourteen = weightTopicFourteen * scoreTopicFourteen;
  document.getElementById("weightedScoreTopicFourteen").value = weightedScoreTopicFourteen;

  weightedScoreTopicFifteen = weightTopicFifteen * scoreTopicFifteen;
  document.getElementById("weightedScoreTopicFifteen").value = weightedScoreTopicFifteen;

  weightedScoreTopicSixteen = weightTopicSixteen * scoreTopicSixteen;
  document.getElementById("weightedScoreTopicSixteen").value = weightedScoreTopicSixteen;

  weightedScoreTopicSeventeen = weightTopicSeventeen * scoreTopicSeventeen;
  document.getElementById("weightedScoreTopicSeventeen").value = weightedScoreTopicSeventeen;

  weightedScoreTopicEighteen = weightTopicEighteen * scoreTopicEighteen;
  document.getElementById("weightedScoreTopicEighteen").value = weightedScoreTopicEighteen;

  weightedScoreTopicNineteen = weightTopicNineteen * scoreTopicNineteen;
  document.getElementById("weightedScoreTopicNineteen").value = weightedScoreTopicNineteen;

  weightedScoreTopicTwenty = weightTopicTwenty * scoreTopicTwenty;
  document.getElementById("weightedScoreTopicTwenty").value = weightedScoreTopicTwenty;

  weightedScoreTopicTwentyOne = weightTopicTwentyOne * scoreTopicTwentyOne;
  document.getElementById("weightedScoreTopicTwentyOne").value = weightedScoreTopicTwentyOne;

  weightedScoreTopicTwentyTwo = weightTopicTwentyTwo * scoreTopicTwentyTwo;
  document.getElementById("weightedScoreTopicTwentyTwo").value = weightedScoreTopicTwentyTwo;

  weightedScoreTopicTwentyThree = weightTopicTwentyThree * scoreTopicTwentyThree;
  document.getElementById("weightedScoreTopicTwentyThree").value = weightedScoreTopicTwentyThree;

  weightedScoreTopicTwentyFour = weightTopicTwentyFour * scoreTopicTwentyFour;
  document.getElementById("weightedScoreTopicTwentyFour").value = weightedScoreTopicTwentyFour;

  weightedScoreTopicTwentyFive = weightTopicTwentyFive * scoreTopicTwentyFive;
  document.getElementById("weightedScoreTopicTwentyFive").value = weightedScoreTopicTwentyFive;

  weightedScoreTopicTwentySix = weightTopicTwentySix * scoreTopicTwentySix;
  document.getElementById("weightedScoreTopicTwentySix").value = weightedScoreTopicTwentySix;

  weightedScoreTopicTwentySeven = weightTopicTwentySeven * scoreTopicTwentySeven;
  document.getElementById("weightedScoreTopicTwentySeven").value = weightedScoreTopicTwentySeven;

  weightedScoreTopicTwentyEight = weightTopicTwentyEight * scoreTopicTwentyEight;
  document.getElementById("weightedScoreTopicTwentyEight").value = weightedScoreTopicTwentyEight;

  weightedScoreTopicTwentyNine = weightTopicTwentyNine * scoreTopicTwentyNine;
  document.getElementById("weightedScoreTopicTwentyNine").value = weightedScoreTopicTwentyNine;

  weightedScoreTopicThirty = weightTopicThirty * scoreTopicThirty;
  document.getElementById("weightedScoreTopicThirty").value = weightedScoreTopicThirty;

  weightedScoreTopicThirtyOne = weightTopicThirtyOne * scoreTopicThirtyOne;
  document.getElementById("weightedScoreTopicThirtyOne").value = weightedScoreTopicThirtyOne;

  sumWeightsMLM =
    weightTopicOne +
    weightTopicTwo +
    weightTopicThree +
    weightTopicFour +
    weightTopicFive +
    weightTopicSix +
    weightTopicSeven +
    weightTopicEight +
    weightTopicNine +
    weightTopicTen +
    weightTopicEleven +
    weightTopicTwelve +
    weightTopicThirteen +
    weightTopicFourteen +
    weightTopicFifteen +
    weightTopicSixteen +
    weightTopicSeventeen +
    weightTopicEighteen +
    weightTopicNineteen +
    weightTopicTwenty +
    weightTopicTwentyOne +
    weightTopicTwentyTwo +
    weightTopicTwentyThree +
    weightTopicTwentyFour +
    weightTopicTwentyFive +
    weightTopicTwentySix +
    weightTopicTwentySeven +
    weightTopicTwentyEight +
    weightTopicTwentyNine +
    weightTopicThirty +
    weightTopicThirtyOne;

  document.getElementById("sumWeightsMLM").value = sumWeightsMLM;

  sumWeightedScoresMLM =
    weightedScoreTopicOne +
    weightedScoreTopicTwo +
    weightedScoreTopicThree +
    weightedScoreTopicFour +
    weightedScoreTopicFive +
    weightedScoreTopicSix +
    weightedScoreTopicSeven +
    weightedScoreTopicEight +
    weightedScoreTopicNine +
    weightedScoreTopicTen +
    weightedScoreTopicEleven +
    weightedScoreTopicTwelve +
    weightedScoreTopicThirteen +
    weightedScoreTopicFourteen +
    weightedScoreTopicFifteen +
    weightedScoreTopicSixteen +
    weightedScoreTopicSeventeen +
    weightedScoreTopicEighteen +
    weightedScoreTopicNineteen +
    weightedScoreTopicTwenty +
    weightedScoreTopicTwentyOne +
    weightedScoreTopicTwentyTwo +
    weightedScoreTopicTwentyThree +
    weightedScoreTopicTwentyFour +
    weightedScoreTopicTwentyFive +
    weightedScoreTopicTwentySix +
    weightedScoreTopicTwentySeven +
    weightedScoreTopicTwentyEight +
    weightedScoreTopicTwentyNine +
    weightedScoreTopicThirty +
    weightedScoreTopicThirtyOne;

  document.getElementById("sumWeightedScoresMLM").value = sumWeightedScoresMLM;

  currentGradeMLM = sumWeightedScoresMLM / sumWeightsMLM;

  document.getElementById("currentGradeMLM").value = currentGradeMLM;

  cumulativeGradeMLM = sumWeightedScoresMLM / 100;

  document.getElementById("cumulativeGradeMLM").value = cumulativeGradeMLM;
}
// End MDE 60 MLM Grade Calculations
