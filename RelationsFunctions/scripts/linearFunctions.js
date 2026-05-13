/*
  Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
  www.samuelchukwuemeka.com
  www.chukwuemekasamuel.com
  www.samdomforpeace.com
  www.chukwuemeka-samuel.appspot.com
  www.samdomforpeace.appspot.com
  www.expressions-equations.appspot.com/calculators.html
*/

//"use strict";

// LCM calculation
function gcdNum(m, n){
  if ( !n ){
      return m;
  }
  return gcdNum(n, m % n);
}

function lcmNum(m, n){
  return Math.abs(m * n) / gcdNum(m, n);
}

//Reference: https://stackoverflow.com/questions/7308627/javascript-calculate-the-nth-root-of-a-number
function nthRoot(x, n) {
  if (x < 0 && n % 2 !== 1)
      return NaN; // Not a number
  return (x < 0 ? -1 : 1) * Math.pow(Math.abs(x), 1 / n);
}

//https://stackoverflow.com/questions/23575218/convert-decimal-number-to-fraction-in-javascript-or-closest-fraction
//By chowey
function decimal2Fraction(x, tolerance) {
  if (x < 0) x = -x;
  if (!tolerance) tolerance = 0.0001;
  var numerator = 1, denominator = 1;

  function iterate() {
      var R = numerator/denominator;
      if (Math.abs((R-x)/x) < tolerance) return;

      if (R < x) numerator++;
      else denominator++;
      iterate();
  }

  iterate();
  return [numerator, denominator];
}

// Convert Decimal to Fraction
document.getElementById("decimal2Fraction1st").addEventListener("submit", decimal2Fraction1st);
function decimal2Fraction1st(event) {
    event.preventDefault();
    event.stopPropagation();

    var decimal1st = parseFloat(document.getElementById("decimal1st").value, 10) || 0,
        fraction1st,
        numerator1st,
        denominator1st;
            
        fraction1st = decimal2Fraction(decimal1st);    
        numerator1st = parseFloat(fraction1st[0]);    
        denominator1st = parseFloat(fraction1st[1]);
            
document.getElementById("numerator1st").value = numerator1st;
document.getElementById("denominator1st").value = denominator1st;
}


// Given: Two Points: Slope and a Point that passes through the origin (0, 0)
// Slope is an integer
// Calculate: Slope, Intercepts, Slope-Intercept Form, Standard Form
document.getElementById("linearFunctionFirst1").addEventListener("submit", linearFunctionFirst1);

function linearFunctionFirst1(event) {
    event.preventDefault();

  var slopeLF1first = parseFloat(document.getElementById("slopeLF1first").value, 10) || 0,
    slopeSILF1first,
    firstCoefficientSLF1first,
    secondCoefficientSLF1first;


  slopeSILF1first = slopeLF1first;

  if (slopeLF1first > 0) {
    firstCoefficientSLF1first = slopeLF1first;
    secondCoefficientSLF1first = -1;
  }

  if(slopeLF1first < 0){
    firstCoefficientSLF1first = -1 * slopeLF1first;
    secondCoefficientSLF1first = 1;
  }

  
  document.getElementById("slopeSILF1first").value = slopeSILF1first;
  document.getElementById("firstCoefficientSLF1first").value = firstCoefficientSLF1first;
  document.getElementById("secondCoefficientSLF1first").value = secondCoefficientSLF1first;
}


// Given: Two Points: Slope and a Point that passes through the origin (0, 0)
// Slope is a fraction
// Calculate: Slope, Intercepts, Slope-Intercept Form, Standard Form
document.getElementById("linearFunctionFirst2").addEventListener("submit", linearFunctionFirst2);

function linearFunctionFirst2(event) {
    event.preventDefault();

  var numeratorLF2 = parseFloat(document.getElementById("numeratorLF2").value, 10) || 0,
    denominatorLF2 = parseFloat(document.getElementById("denominatorLF2").value, 10) || 0,
    numeratorLF2first,
    denominatorLF2first,
    firstCoefficientSLF2first,
    secondCoefficientSLF2first;


    numeratorLF2first = numeratorLF2;

    denominatorLF2first = denominatorLF2;

    if(denominatorLF2 <= 0){
      alert("The denominator cannot be zero.\nThe denominator cannot be negative.\nIf the slope is negative, then the negative belongs to the numerator.");
      return false;
    }

  if (numeratorLF2 > 0) {
    firstCoefficientSLF2first = numeratorLF2;
    secondCoefficientSLF2first = -1 * denominatorLF2;
  }

  if(numeratorLF2 < 0){
    firstCoefficientSLF2first = -1 * numeratorLF2;
    secondCoefficientSLF2first = denominatorLF2;
  }

  
  document.getElementById("numeratorLF2first").value = numeratorLF2first;
  document.getElementById("denominatorLF2first").value = denominatorLF2first;
  document.getElementById("firstCoefficientSLF2first").value = firstCoefficientSLF2first;
  document.getElementById("secondCoefficientSLF2first").value = secondCoefficientSLF2first;
}


// Given: Two Points: Slope and a Point (x1, y1)
// Slope and the coordinates of the Point are integers
// Calculate: Slope, Intercepts, Slope-Intercept Form, Standard Form
document.getElementById("linearFunctionFirst3").addEventListener("submit", linearFunctionFirst3);

function linearFunctionFirst3(event) {
    event.preventDefault();

  var slopeLF3first = parseFloat(document.getElementById("slopeLF3first").value, 30) || 0,
    x1LF3first = parseFloat(document.getElementById("x1LF3first").value, 30) || 0,
    y1LF3first = parseFloat(document.getElementById("y1LF3first").value, 30) || 0,
    slopeSILF3first,
    interceptSILF3first,
    firstCoefficientSLF3first,
    secondCoefficientSLF3first,
    constantSLF3first,
    xInterceptLF3first,
    yInterceptLF3first;


  slopeSILF3first = slopeLF3first;

  interceptSILF3first = -1 * slopeLF3first * x1LF3first + y1LF3first;

  xInterceptLF3first = (-1 * interceptSILF3first) / slopeLF3first;

  yInterceptLF3first = interceptSILF3first;

  if ((slopeLF3first > 0) && (interceptSILF3first > 0)) {
    firstCoefficientSLF3first = slopeLF3first;
    secondCoefficientSLF3first = -1;
    constantSLF3first = -1 * interceptSILF3first;
  }

  if ((slopeLF3first > 0) && (interceptSILF3first < 0)) {
    firstCoefficientSLF3first = slopeLF3first;
    secondCoefficientSLF3first = -1;
    constantSLF3first = -1 * interceptSILF3first;
  }

  if ((slopeLF3first < 0) && (interceptSILF3first > 0)) {
    firstCoefficientSLF3first = -1 * slopeLF3first;
    secondCoefficientSLF3first = 1;
    constantSLF3first = interceptSILF3first;
  }

  if ((slopeLF3first < 0) && (interceptSILF3first < 0)) {
    firstCoefficientSLF3first = -1 * slopeLF3first;
    secondCoefficientSLF3first = 1;
    constantSLF3first = interceptSILF3first;
  }

  
  document.getElementById("slopeSILF3first").value = slopeSILF3first;
  document.getElementById("interceptSILF3first").value = interceptSILF3first;
  document.getElementById("firstCoefficientSLF3first").value = firstCoefficientSLF3first;
  document.getElementById("secondCoefficientSLF3first").value = secondCoefficientSLF3first;
  document.getElementById("constantSLF3first").value = constantSLF3first;
  document.getElementById("xInterceptLF3first").value = xInterceptLF3first;
  document.getElementById("yInterceptLF3first").value = yInterceptLF3first;
}


// Given: Two Points: $(x_1, y_1)$ and $(x_2, y_2)$
// Calculate: Slope, Intercepts, Slope-Intercept Form, Standard Form, Point-Slope Form
document.getElementById("linearFunctionFirst").addEventListener("submit", linearFunctionFirst);

function linearFunctionFirst(event) {
    event.preventDefault();

    var x1LFfirst = parseFloat(document.getElementById("x1LFfirst").value, 10) || 0,
        y1LFfirst = parseFloat(document.getElementById("y1LFfirst").value, 10) || 0,
        x2LFfirst = parseFloat(document.getElementById("x2LFfirst").value, 10) || 0,
        y2LFfirst = parseFloat(document.getElementById("y2LFfirst").value, 10) || 0,
        slopeLFfirst,
        slopeSILFfirst,
        interceptSILFfirst,
        firstCoefficientSLFfirst,
        secondCoefficientSLFfirst,
        constantSLFfirst,
        xInterceptLFfirst,
        yInterceptLFfirst,
        y1PSLFfirst,
        slope1PSLFfirst,
        x1PSLFfirst,
        y2PSLFfirst,
        slope2PSLFfirst,
        x2PSLFfirst;
      

        slopeLFfirst = (y2LFfirst - y1LFfirst) / (x2LFfirst - x1LFfirst);

        slopeSILFfirst = slopeLFfirst;
              
        if (x1LFfirst == 0) {
            interceptSILFfirst = y1LFfirst;
        }
       
        if (x2LFfirst == 0) {
          interceptSILFfirst = y2LFfirst;
        }

        if((x1LFfirst == 0) && (x2LFfirst == 0)){
          interceptSILFfirst = "Infinity";
        }

        if(x1LFfirst > x2LFfirst){
          alert("Please put the lesser value of x as the x-coordinate of Point 1, along with it's matching y-coordinate\nNo worries, it will give the correct answer for the slope provided you put each corresponding (matching) \"y\" with the \"x\"");
          return false;
        }

        if((x1LFfirst < x2LFfirst) && (x1LFfirst > 0)){
          interceptSILFfirst = ((x2LFfirst * y1LFfirst) - (x1LFfirst * y2LFfirst)) / (x2LFfirst - x1LFfirst);
        }

        if((x1LFfirst < x2LFfirst) && (x2LFfirst < 0)){
          interceptSILFfirst = ((x1LFfirst * y2LFfirst) - (x2LFfirst * y1LFfirst)) / (x1LFfirst - x2LFfirst);
        }

        if(x1LFfirst < 0 < x2LFfirst){
          interceptSILFfirst = ((x1LFfirst * y2LFfirst) - (x2LFfirst * y1LFfirst)) / (x1LFfirst - x2LFfirst);
        }

       if(slopeLFfirst >= 0){
         firstCoefficientSLFfirst = slopeLFfirst;
         secondCoefficientSLFfirst = -1;
         constantSLFfirst = -1 * interceptSILFfirst;
       }

       if(slopeLFfirst < 0){
         firstCoefficientSLFfirst = -1 * slopeLFfirst;
         secondCoefficientSLFfirst = 1;
         constantSLFfirst = interceptSILFfirst;
       }

       xInterceptLFfirst = (-1 * interceptSILFfirst) / slopeLFfirst;

       yInterceptLFfirst = interceptSILFfirst;

       y1PSLFfirst = y1LFfirst;

       slope1PSLFfirst = slopeLFfirst;

       x1PSLFfirst = x1LFfirst;

       y2PSLFfirst = y2LFfirst;

       slope2PSLFfirst = slopeLFfirst;

       x2PSLFfirst = x2LFfirst;

       
  document.getElementById("slopeLFfirst").value = slopeLFfirst;
  document.getElementById("slopeSILFfirst").value = slopeSILFfirst;
  document.getElementById("interceptSILFfirst").value = interceptSILFfirst;
  document.getElementById("firstCoefficientSLFfirst").value = firstCoefficientSLFfirst;
  document.getElementById("secondCoefficientSLFfirst").value = secondCoefficientSLFfirst;
  document.getElementById("constantSLFfirst").value = constantSLFfirst;
  document.getElementById("xInterceptLFfirst").value = xInterceptLFfirst;
  document.getElementById("yInterceptLFfirst").value = yInterceptLFfirst;
  document.getElementById("y1PSLFfirst").value = y1PSLFfirst;
  document.getElementById("slope1PSLFfirst").value = slope1PSLFfirst;
  document.getElementById("x1PSLFfirst").value = x1PSLFfirst;
  document.getElementById("y2PSLFfirst").value = y2PSLFfirst;
  document.getElementById("slope2PSLFfirst").value = slope2PSLFfirst;
  document.getElementById("x2PSLFfirst").value = x2PSLFfirst;
}


// Given: Slope-Intercept Form
// Where: Only the slope is a fraction
// To Convert to: Standard Form
document.getElementById("linearFunctionSecond").addEventListener("submit", linearFunctionSecond);

function linearFunctionSecond(event) {
  event.preventDefault();

  var numerator2nd = parseFloat(document.getElementById("numerator2nd").value, 10) || 0,
    denominator2nd = parseFloat(document.getElementById("denominator2nd").value, 10) || 0,
    interceptSILFsecond = parseFloat(document.getElementById("interceptSILFsecond").value, 10) || 0,
    firstCoefficientSLFsecond,
    secondCoefficientSLFsecond,
    constantSLFsecond;

    if(denominator2nd <= 0){
      alert("The denominator cannot be negative.\nIt cannot be equal to zero.\nIf the slope is negative, then the negative belongs to the numerator.");
      return false;
    }

    if((numerator2nd > 0) && (interceptSILFsecond >= 0)){
      firstCoefficientSLFsecond = numerator2nd;
      secondCoefficientSLFsecond = -1 * denominator2nd;
      constantSLFsecond = -1 * denominator2nd * interceptSILFsecond;
    }

    if((numerator2nd < 0) && (interceptSILFsecond >= 0)){
      firstCoefficientSLFsecond = -1 * numerator2nd;
      secondCoefficientSLFsecond = denominator2nd;
      constantSLFsecond = denominator2nd * interceptSILFsecond;
    }

    if((numerator2nd > 0) && (interceptSILFsecond < 0)){
      firstCoefficientSLFsecond = numerator2nd;
      secondCoefficientSLFsecond = -1 * denominator2nd;
      constantSLFsecond = -1 * interceptSILFsecond * denominator2nd;
    }

    if((numerator2nd < 0) && (interceptSILFsecond < 0)){
      firstCoefficientSLFsecond = -1 * numerator2nd;
      secondCoefficientSLFsecond = denominator2nd;
      constantSLFsecond = interceptSILFsecond * denominator2nd;
    }

    document.getElementById("firstCoefficientSLFsecond").value = firstCoefficientSLFsecond;
    document.getElementById("secondCoefficientSLFsecond").value = secondCoefficientSLFsecond;
    document.getElementById("constantSLFsecond").value = constantSLFsecond;
}



// Given: Slope-Intercept Form
// Where: Only the y-intercept is a fraction
// To Convert to: Standard Form
document.getElementById("linearFunctionThird").addEventListener("submit", linearFunctionThird);

function linearFunctionThird(event) {
  event.preventDefault();

  var numerator3rd = parseFloat(document.getElementById("numerator3rd").value, 10) || 0,
    denominator3rd = parseFloat(document.getElementById("denominator3rd").value, 10) || 0,
    slopeSILFthird = parseFloat(document.getElementById("slopeSILFthird").value, 10) || 0,
    firstCoefficientSLFthird,
    secondCoefficientSLFthird,
    constantSLFthird;

    if(denominator3rd <= 0){
      alert("The denominator cannot be negative.\nIt cannot be equal to zero.\nIf the y-intercept is negative, then the negative belongs to the numerator.");
      return false;
    }

    if((numerator3rd > 0) && (slopeSILFthird >= 0)){
      firstCoefficientSLFthird = denominator3rd * slopeSILFthird;
      secondCoefficientSLFthird = -1 * denominator3rd;
      constantSLFthird = -1 * numerator3rd;
    }

    if((numerator3rd < 0) && (slopeSILFthird >= 0)){
      firstCoefficientSLFthird = denominator3rd * slopeSILFthird;
      secondCoefficientSLFthird = -1 * denominator3rd;
      constantSLFthird = -1 * numerator3rd;
    }

    if((numerator3rd > 0) && (slopeSILFthird < 0)){
      firstCoefficientSLFthird = -1 * slopeSILFthird * denominator3rd;
      secondCoefficientSLFthird = denominator3rd;
      constantSLFthird = numerator3rd;
    }

    if((numerator3rd < 0) && (slopeSILFthird < 0)){
      firstCoefficientSLFthird = -1 * slopeSILFthird * denominator3rd;
      secondCoefficientSLFthird = denominator3rd;
      constantSLFthird = numerator3rd;
    }

    document.getElementById("firstCoefficientSLFthird").value = firstCoefficientSLFthird;
    document.getElementById("secondCoefficientSLFthird").value = secondCoefficientSLFthird;
    document.getElementById("constantSLFthird").value = constantSLFthird;
}


// Given: Slope-Intercept Form
// Where: Only the slope and the y-intercept are fractions and both fractions have the same denominator
// To Convert to: Standard Form
document.getElementById("linearFunctionFourth").addEventListener("submit", linearFunctionFourth);

function linearFunctionFourth(event) {
  event.preventDefault();

  var numerator4th1 = parseFloat(document.getElementById("numerator4th1").value, 10) || 0,
    denominator4th1 = parseFloat(document.getElementById("denominator4th1").value, 10) || 0,
    numerator4th2 = parseFloat(document.getElementById("numerator4th2").value, 10) || 0,
    denominator4th2 = parseFloat(document.getElementById("denominator4th2").value, 10) || 0,
    firstCoefficientSLFfourth,
    secondCoefficientSLFfourth,
    constantSLFfourth;

    if((denominator4th1 <= 0) || (denominator4th2 <= 0)){
      alert("The denominator cannot be negative.\nIt cannot be equal to zero.\nIf the slope and/or the y-intercept is negative, then the negative belongs to the numerator.");
      return false;
    }

    if(denominator4th1 != denominator4th2){
      alert("To use this calculator, both denominators must be the same.\nIf the two denominators are not the same, please use the appropriate calculator for it.");
      return false;
    }

    if((numerator4th1 > 0) && (numerator4th2 > 0)){
      firstCoefficientSLFfourth = numerator4th1;
      secondCoefficientSLFfourth = -1 * denominator4th1;
      constantSLFfourth = -1 * numerator4th2;
    }

    if((numerator4th1 < 0) && (numerator4th2 > 0)){
      firstCoefficientSLFfourth = -1 * numerator4th1;
      secondCoefficientSLFfourth = denominator4th1;
      constantSLFfourth = numerator4th2;
    }

    if((numerator4th1 > 0) && (numerator4th2 < 0)){
      firstCoefficientSLFfourth = numerator4th1;
      secondCoefficientSLFfourth = -1 * denominator4th1;
      constantSLFfourth = -1 * numerator4th2;
    }

    if((numerator4th1 < 0) && (numerator4th2 < 0)){
      firstCoefficientSLFfourth = -1 * numerator4th1;
      secondCoefficientSLFfourth = denominator4th1;
      constantSLFfourth = numerator4th2;
    }

    document.getElementById("firstCoefficientSLFfourth").value = firstCoefficientSLFfourth;
    document.getElementById("secondCoefficientSLFfourth").value = secondCoefficientSLFfourth;
    document.getElementById("constantSLFfourth").value = constantSLFfourth;
}


// Given: Slope-Intercept Form
// Where: Only the slope and the y-intercept are fractions and both fractions do not have the same denominator
// To Convert to: Standard Form
document.getElementById("linearFunctionFifth").addEventListener("submit", linearFunctionFifth);

function linearFunctionFifth(event) {
  event.preventDefault();

  var numerator5th1 = parseFloat(document.getElementById("numerator5th1").value, 10) || 0,
    denominator5th1 = parseFloat(document.getElementById("denominator5th1").value, 10) || 0,
    numerator5th2 = parseFloat(document.getElementById("numerator5th2").value, 10) || 0,
    denominator5th2 = parseFloat(document.getElementById("denominator5th2").value, 10) || 0,
    lcdDenominators5th,
    product5th1,
    product5th2,
    product5th3,
    firstCoefficientSLFfifth,
    secondCoefficientSLFfifth,
    constantSLFfifth;

    if((denominator5th1 <= 0) || (denominator5th2 <= 0)){
      alert("The denominator cannot be negative.\nIt cannot be equal to zero.\nIf the slope and/or the y-intercept is negative, then the negative belongs to the numerator.");
      return false;
    }

    lcdDenominators5th = lcmNum(denominator5th1, denominator5th2);

    product5th1 = lcdDenominators5th;

    product5th2 = (lcdDenominators5th * numerator5th1) / denominator5th1;
    
    product5th3 = (lcdDenominators5th * numerator5th2) / denominator5th2;

    if((numerator5th1 > 0) && (numerator5th2 > 0)){
      firstCoefficientSLFfifth = product5th2;
      secondCoefficientSLFfifth = -1 * product5th1;
      constantSLFfifth = -1 * product5th3;
    }

    if((numerator5th1 < 0) && (numerator5th2 > 0)){
      firstCoefficientSLFfifth = -1 * product5th2;
      secondCoefficientSLFfifth = product5th1;
      constantSLFfifth = product5th3;
    }

    if((numerator5th1 > 0) && (numerator5th2 < 0)){
      firstCoefficientSLFfifth = product5th2;
      secondCoefficientSLFfifth = -1 * product5th1;
      constantSLFfifth = -1 * product5th3;
    }

    if((numerator5th1 < 0) && (numerator5th2 < 0)){
      firstCoefficientSLFfifth = -1 * product5th2;
      secondCoefficientSLFfifth = product5th1;
      constantSLFfifth = product5th3;
    }

    document.getElementById("firstCoefficientSLFfifth").value = firstCoefficientSLFfifth;
    document.getElementById("secondCoefficientSLFfifth").value = secondCoefficientSLFfifth;
    document.getElementById("constantSLFfifth").value = constantSLFfifth;
}