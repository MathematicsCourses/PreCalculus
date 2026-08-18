/*
    Copyright 2023 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    
    
    https://mathematicscourses.github.io/PreCalculus/PreCalculusOnsite/precalculus.html
    https://mathematicscourses.github.io/PreCalculus/PreCalculusOnsite/GradesCalculators.html
*/

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Message Greeting
var presentDate, presentHour, greeting;

presentDate = new Date();
presentDate.getDate();

presentHour = presentDate.getHours();

if (presentHour < 12) {
  greeting = "Good morning.";
} else if (presentHour >= 12 && presentHour < 16) {
  greeting = "Good afternoon.";
} else if (presentHour >= 16 && presentHour <= 24) {
  greeting = "Good evening.";
}

document.getElementById("greetings").innerHTML = greeting;

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

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
