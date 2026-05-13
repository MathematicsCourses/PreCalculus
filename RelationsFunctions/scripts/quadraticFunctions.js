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
document.getElementById("decimal2FractionQF1st").addEventListener("submit", decimal2FractionQF1st);
function decimal2FractionQF1st(event) {
    event.preventDefault();
    event.stopPropagation();

    var decimalQF1st = parseFloat(document.getElementById("decimalQF1st").value, 10) || 0,
        fractionQF1st,
        numeratorQF1st,
        denominatorQF1st;
            
        fractionQF1st = decimal2Fraction(decimalQF1st);    
        numeratorQF1st = parseFloat(fractionQF1st[0]);    
        denominatorQF1st = parseFloat(fractionQF1st[1]);
            
document.getElementById("numeratorQF1st").value = numeratorQF1st;
document.getElementById("denominatorQF1st").value = denominatorQF1st;
}


// First
// Given: Table of Some Values for a Quadratic Function
// Calculate: other details
document.getElementById("quadraticFunctionFirst").addEventListener("submit", quadraticFunctionFirst);

function quadraticFunctionFirst(event) {
    event.preventDefault();

  var x1QFfirst = parseFloat(document.getElementById("x1QFfirst").value, 10) || 0,
    y1QFfirst = parseFloat(document.getElementById("y1QFfirst").value, 10) || 0,
    x2QFfirst = parseFloat(document.getElementById("x2QFfirst").value, 10) || 0,
    y2QFfirst = parseFloat(document.getElementById("y2QFfirst").value, 10) || 0,
    x3QFfirst = parseFloat(document.getElementById("x3QFfirst").value, 10) || 0,
    y3QFfirst = parseFloat(document.getElementById("y3QFfirst").value, 10) || 0,
    firstQFfirst,
    secondQFfirst,
    thirdQFfirst,
    fourthQFfirst,
    fifthQFfirst,
    sixthQFfirst,
    numeratorFirstCoefficientQFfirst,
    denominatorFirstCoefficientQFfirst,
    firstCoefficientQFfirst,
    seventhQFfirst,
    eighthQFfirst,
    ninthQFfirst,
    tenthQFfirst,
    eleventhQFfirst,
    twelfthQFfirst,
    numeratorSecondCoefficientQFfirst,
    denominatorSecondCoefficientQFfirst,
    secondCoefficientQFfirst,
    thirteenthQFfirst,
    fourteenthQFfirst,
    fifteenthQFfirst,
    sixteenthQFfirst,
    seventeenthQFfirst,
    eigthteenthQFfirst,
    numeratorConstantQFfirst,
    denominatorConstantQFfirst,    
    constantQFfirst,
    extremaQFfirst,
    xVertexQFfirst,
    yVertexQFfirst,
    x1VertexQFfirst,
    y1VertexQFfirst,
    nineteenthQFfirst,
    twentiethQFfirst,
    x1InterceptQFfirst,
    x2InterceptQFfirst,
    yInterceptQFfirst;
    

    firstQFfirst = -1 * x1QFfirst * y2QFfirst;

    secondQFfirst = x1QFfirst * y3QFfirst;

    thirdQFfirst = x2QFfirst * -1 * y3QFfirst;

    fourthQFfirst = y1QFfirst * x2QFfirst;

    fifthQFfirst = y2QFfirst * x3QFfirst;

    sixthQFfirst = -1 * y1QFfirst * x3QFfirst;

    numeratorFirstCoefficientQFfirst = firstQFfirst + secondQFfirst + thirdQFfirst + fourthQFfirst + fifthQFfirst + sixthQFfirst;

    denominatorFirstCoefficientQFfirst = (x2QFfirst - x1QFfirst) * (x3QFfirst - x1QFfirst) * (x2QFfirst - x3QFfirst);

    firstCoefficientQFfirst = numeratorFirstCoefficientQFfirst / denominatorFirstCoefficientQFfirst;

    seventhQFfirst = -1 * Math.pow(x1QFfirst, 2) * y2QFfirst;

    eighthQFfirst = Math.pow(x1QFfirst, 2) * y3QFfirst;

    ninthQFfirst = -1 * Math.pow(x2QFfirst, 2) * y3QFfirst;

    tenthQFfirst = y1QFfirst * Math.pow(x2QFfirst, 2);

    eleventhQFfirst = y2QFfirst * Math.pow(x3QFfirst, 2);

    twelfthQFfirst = -1 * y1QFfirst * Math.pow(x3QFfirst, 2);

    numeratorSecondCoefficientQFfirst = seventhQFfirst + eighthQFfirst + ninthQFfirst + tenthQFfirst + eleventhQFfirst + twelfthQFfirst;

    denominatorSecondCoefficientQFfirst = (x1QFfirst - x2QFfirst) * (x1QFfirst - x3QFfirst) * (x3QFfirst - x2QFfirst); 

    secondCoefficientQFfirst = numeratorSecondCoefficientQFfirst / denominatorSecondCoefficientQFfirst;

    thirteenthQFfirst = Math.pow(x1QFfirst, 2) * x2QFfirst * y3QFfirst;

    fourteenthQFfirst = -1 * Math.pow(x1QFfirst, 2) * x3QFfirst * y2QFfirst;
    
    fifteenthQFfirst = -1 * x1QFfirst * Math.pow(x2QFfirst, 2) * y3QFfirst;

    sixteenthQFfirst = x1QFfirst * y2QFfirst * Math.pow(x3QFfirst, 2);

    seventeenthQFfirst = y1QFfirst * Math.pow(x2QFfirst, 2) * x3QFfirst;

    eigthteenthQFfirst = -1 * y1QFfirst * x2QFfirst * Math.pow(x3QFfirst, 2);

    numeratorConstantQFfirst = thirteenthQFfirst + fourteenthQFfirst + fifteenthQFfirst + sixteenthQFfirst + seventeenthQFfirst + eigthteenthQFfirst;

    denominatorConstantQFfirst = (x2QFfirst - x1QFfirst) * (x3QFfirst - x1QFfirst) * (x2QFfirst - x3QFfirst);

    constantQFfirst = numeratorConstantQFfirst / denominatorConstantQFfirst;

    if(firstCoefficientQFfirst > 0){
      extremaQFfirst = "minimum";
    }

    if(firstCoefficientQFfirst < 0){
      extremaQFfirst = "maximum";
    }

    if(firstCoefficientQFfirst == 0){
      alert("This is not a Quadratic Function");
      return false;
    }

    xVertexQFfirst = (-1 * secondCoefficientQFfirst) / (2 * firstCoefficientQFfirst);

    yVertexQFfirst = (firstCoefficientQFfirst * Math.pow(xVertexQFfirst, 2)) + (secondCoefficientQFfirst * xVertexQFfirst) + constantQFfirst;
  
    x1VertexQFfirst = xVertexQFfirst;

    y1VertexQFfirst = yVertexQFfirst;

    nineteenthQFfirst = -1 * secondCoefficientQFfirst;

    twentiethQFfirst = Math.sqrt(Math.pow(secondCoefficientQFfirst, 2) - (4 * firstCoefficientQFfirst * constantQFfirst));

    x1InterceptQFfirst = (nineteenthQFfirst + twentiethQFfirst) / (2 * firstCoefficientQFfirst);

    x2InterceptQFfirst = (nineteenthQFfirst - twentiethQFfirst) / (2 * firstCoefficientQFfirst);

    yInterceptQFfirst = constantQFfirst;

  
  document.getElementById("firstCoefficientQFfirst").value = firstCoefficientQFfirst;
  document.getElementById("secondCoefficientQFfirst").value = secondCoefficientQFfirst;
  document.getElementById("constantQFfirst").value = constantQFfirst;
  document.getElementById("extremaQFfirst").value = extremaQFfirst;
  document.getElementById("xVertexQFfirst").value = xVertexQFfirst;
  document.getElementById("yVertexQFfirst").value = yVertexQFfirst;
  document.getElementById("x1VertexQFfirst").value = x1VertexQFfirst;
  document.getElementById("y1VertexQFfirst").value = y1VertexQFfirst;
  document.getElementById("x1InterceptQFfirst").value = x1InterceptQFfirst;
  document.getElementById("x2InterceptQFfirst").value = x2InterceptQFfirst;
  document.getElementById("yInterceptQFfirst").value = yInterceptQFfirst;

  var x1ValueQFfirst = parseFloat(document.getElementById("x1ValueQFfirst").value, 10) || 0,
  y2ValueQFfirst = parseFloat(document.getElementById("y2ValueQFfirst").value, 10) || 0,
  firstPartValueQFfirst,
  secondPartValueQFfirst,
  thirdPartValueQFfirst,
  y1ValueQFfirst,
  x2Value1QFfirst,
  x2Value2QFfirst;

  y1ValueQFfirst = firstCoefficientQFfirst * Math.pow(x1ValueQFfirst, 2) + secondCoefficientQFfirst * x1ValueQFfirst + constantQFfirst;

  document.getElementById("y1ValueQFfirst").value = y1ValueQFfirst;

  thirdPartValueQFfirst = constantQFfirst - y2ValueQFfirst;

  firstPartValueQFfirst = -1 * secondCoefficientQFfirst;

  secondPartValueQFfirst = Math.sqrt(Math.pow(secondCoefficientQFfirst, 2) - (4 * firstCoefficientQFfirst * thirdPartValueQFfirst));

  x2Value1QFfirst = (firstPartValueQFfirst + secondPartValueQFfirst) / (2 * firstCoefficientQFfirst);

  x2Value2QFfirst = (firstPartValueQFfirst - secondPartValueQFfirst) / (2 * firstCoefficientQFfirst);


  document.getElementById("x2Value1QFfirst").value = x2Value1QFfirst;
  document.getElementById("x2Value2QFfirst").value = x2Value2QFfirst;
}



// Second
// Given: Table of Some Values for a Quadratic Function
// Calculate: other values
document.getElementById("quadraticFunctionSecond").addEventListener("submit", quadraticFunctionSecond);

function quadraticFunctionSecond(event) {
    event.preventDefault();

  var x1QFsecond = parseFloat(document.getElementById("x1QFsecond").value, 10) || 0,
    y1QFsecond = parseFloat(document.getElementById("y1QFsecond").value, 10) || 0,
    x2QFsecond = parseFloat(document.getElementById("x2QFsecond").value, 10) || 0,
    y2QFsecond = parseFloat(document.getElementById("y2QFsecond").value, 10) || 0,
    x3QFsecond = parseFloat(document.getElementById("x3QFsecond").value, 10) || 0,
    y3QFsecond = parseFloat(document.getElementById("y3QFsecond").value, 10) || 0,
    datasetXQFsecond = document.getElementById('datasetXQFsecond').value,
    dataXmiddleQFsecond = datasetXQFsecond.split('\n'),
    sampleSizeXQFsecond = dataXmiddleQFsecond.length,
    dataXQFsecond = [],
    dataYQFsecond = [],
    firstQFsecond,
    secondQFsecond,
    thirdQFsecond,
    fourthQFsecond,
    fifthQFsecond,
    sixthQFsecond,
    numeratorFirstCoefficientQFsecond,
    denominatorFirstCoefficientQFsecond,
    firstCoefficientQFsecond,
    seventhQFsecond,
    eighthQFsecond,
    ninthQFsecond,
    tenthQFsecond,
    eleventhQFsecond,
    twelfthQFsecond,
    numeratorSecondCoefficientQFsecond,
    denominatorSecondCoefficientQFsecond,
    secondCoefficientQFsecond,
    thirteenthQFsecond,
    fourteenthQFsecond,
    fifteenthQFsecond,
    sixteenthQFsecond,
    seventeenthQFsecond,
    eigthteenthQFsecond,
    numeratorConstantQFsecond,
    denominatorConstantQFsecond,    
    constantQFsecond,
    firstPartQFsecond = [],
    secondPartQFsecond = [];
    

    firstQFsecond = -1 * x1QFsecond * y2QFsecond;

    secondQFsecond = x1QFsecond * y3QFsecond;

    thirdQFsecond = x2QFsecond * -1 * y3QFsecond;

    fourthQFsecond = y1QFsecond * x2QFsecond;

    fifthQFsecond = y2QFsecond * x3QFsecond;

    sixthQFsecond = -1 * y1QFsecond * x3QFsecond;

    numeratorFirstCoefficientQFsecond = firstQFsecond + secondQFsecond + thirdQFsecond + fourthQFsecond + fifthQFsecond + sixthQFsecond;

    denominatorFirstCoefficientQFsecond = (x2QFsecond - x1QFsecond) * (x3QFsecond - x1QFsecond) * (x2QFsecond - x3QFsecond);

    firstCoefficientQFsecond = numeratorFirstCoefficientQFsecond / denominatorFirstCoefficientQFsecond;

    seventhQFsecond = -1 * Math.pow(x1QFsecond, 2) * y2QFsecond;

    eighthQFsecond = Math.pow(x1QFsecond, 2) * y3QFsecond;

    ninthQFsecond = -1 * Math.pow(x2QFsecond, 2) * y3QFsecond;

    tenthQFsecond = y1QFsecond * Math.pow(x2QFsecond, 2);

    eleventhQFsecond = y2QFsecond * Math.pow(x3QFsecond, 2);

    twelfthQFsecond = -1 * y1QFsecond * Math.pow(x3QFsecond, 2);

    numeratorSecondCoefficientQFsecond = seventhQFsecond + eighthQFsecond + ninthQFsecond + tenthQFsecond + eleventhQFsecond + twelfthQFsecond;

    denominatorSecondCoefficientQFsecond = (x1QFsecond - x2QFsecond) * (x1QFsecond - x3QFsecond) * (x3QFsecond - x2QFsecond); 

    secondCoefficientQFsecond = numeratorSecondCoefficientQFsecond / denominatorSecondCoefficientQFsecond;

    thirteenthQFsecond = Math.pow(x1QFsecond, 2) * x2QFsecond * y3QFsecond;

    fourteenthQFsecond = -1 * Math.pow(x1QFsecond, 2) * x3QFsecond * y2QFsecond;
    
    fifteenthQFsecond = -1 * x1QFsecond * Math.pow(x2QFsecond, 2) * y3QFsecond;

    sixteenthQFsecond = x1QFsecond * y2QFsecond * Math.pow(x3QFsecond, 2);

    seventeenthQFsecond = y1QFsecond * Math.pow(x2QFsecond, 2) * x3QFsecond;

    eigthteenthQFsecond = -1 * y1QFsecond * x2QFsecond * Math.pow(x3QFsecond, 2);

    numeratorConstantQFsecond = thirteenthQFsecond + fourteenthQFsecond + fifteenthQFsecond + sixteenthQFsecond + seventeenthQFsecond + eigthteenthQFsecond;

    denominatorConstantQFsecond = (x2QFsecond - x1QFsecond) * (x3QFsecond - x1QFsecond) * (x2QFsecond - x3QFsecond);

    constantQFsecond = numeratorConstantQFsecond / denominatorConstantQFsecond;

    dataXQFsecond = dataXmiddleQFsecond.map(Number);

    for (var i = 0; i < sampleSizeXQFsecond; i++){
      firstPartQFsecond[i] = firstCoefficientQFsecond * dataXQFsecond[i] * dataXQFsecond[i];
      secondPartQFsecond[i] = secondCoefficientQFsecond * dataXQFsecond[i];
      dataYQFsecond[i] = firstPartQFsecond[i] + secondPartQFsecond[i] + constantQFsecond;
  }

  
  document.getElementById("firstCoefficientQFsecond").value = firstCoefficientQFsecond;
  document.getElementById("secondCoefficientQFsecond").value = secondCoefficientQFsecond;
  document.getElementById("constantQFsecond").value = constantQFsecond;
  document.getElementById("datasetYQFsecond").value = dataYQFsecond.join("\n");
}


// Third
// Given: A Quadratic Function
// Calculate: Table of Values and other values
document.getElementById("quadraticFunctionThird").addEventListener("submit", quadraticFunctionThird);

function quadraticFunctionThird(event) {
    event.preventDefault();

  var firstCoefficientQFthird = parseFloat(document.getElementById("firstCoefficientQFthird").value, 10) || 0,
    secondCoefficientQFthird = parseFloat(document.getElementById("secondCoefficientQFthird").value, 10) || 0,
    constantQFthird = parseFloat(document.getElementById("constantQFthird").value, 10) || 0,
    extremaQFthird,
    datasetXQFthird = document.getElementById('datasetXQFthird').value,
    dataXmiddleQFthird = datasetXQFthird.split('\n'),
    sampleSizeXQFthird = dataXmiddleQFthird.length,
    dataXQFthird = [],
    dataYQFthird = [],
    firstPartQFthird = [],
    secondPartQFthird = [],
    xVertexQFthird,
    yVertexQFthird,
    x1VertexQFthird,
    y1VertexQFthird,
    firstQFthird,
    secondQFthird,
    x1InterceptQFthird,
    x2InterceptQFthird,
    yInterceptQFthird;
    

    if(firstCoefficientQFthird > 0){
      extremaQFthird = "minimum";
    }

    if(firstCoefficientQFthird < 0){
      extremaQFthird = "maximum";
    }

    if(firstCoefficientQFthird == 0){
      alert("This is not a Quadratic Function");
      return false;
    }

    dataXQFthird = dataXmiddleQFthird.map(Number);

    for (var i = 0; i < sampleSizeXQFthird; i++){
      firstPartQFthird[i] = firstCoefficientQFthird * dataXQFthird[i] * dataXQFthird[i];
      secondPartQFthird[i] = secondCoefficientQFthird * dataXQFthird[i];
      dataYQFthird[i] = firstPartQFthird[i] + secondPartQFthird[i] + constantQFthird;
  }

    xVertexQFthird = (-1 * secondCoefficientQFthird) / (2 * firstCoefficientQFthird);

    yVertexQFthird = (firstCoefficientQFthird * Math.pow(xVertexQFthird, 2)) + (secondCoefficientQFthird * xVertexQFthird) + constantQFthird;
  
    x1VertexQFthird = xVertexQFthird;

    y1VertexQFthird = yVertexQFthird;

    firstQFthird = -1 * secondCoefficientQFthird;

    secondQFthird = Math.sqrt(Math.pow(secondCoefficientQFthird, 2) - (4 * firstCoefficientQFthird * constantQFthird));

    x1InterceptQFthird = (firstQFthird + secondQFthird) / (2 * firstCoefficientQFthird);

    x2InterceptQFthird = (firstQFthird - secondQFthird) / (2 * firstCoefficientQFthird);

    yInterceptQFthird = constantQFthird;


  document.getElementById("extremaQFthird").value = extremaQFthird;
  document.getElementById("datasetYQFthird").value = dataYQFthird.join("\n");
  document.getElementById("xVertexQFthird").value = xVertexQFthird;
  document.getElementById("yVertexQFthird").value = yVertexQFthird;
  document.getElementById("x1VertexQFthird").value = x1VertexQFthird;
  document.getElementById("y1VertexQFthird").value = y1VertexQFthird;
  document.getElementById("x1InterceptQFthird").value = x1InterceptQFthird;
  document.getElementById("x2InterceptQFthird").value = x2InterceptQFthird;
  document.getElementById("yInterceptQFthird").value = yInterceptQFthird;
}


// Fourth
// Given: Standrd Form of a Quadratic Function
// Calculate: Vertex Form of the Quadratic Function and other details
document.getElementById("quadraticFunctionFourth").addEventListener("submit", quadraticFunctionFourth);

function quadraticFunctionFourth(event) {
    event.preventDefault();

  var firstCoefficientQFfourth = parseFloat(document.getElementById("firstCoefficientQFfourth").value, 10) || 0,
    secondCoefficientQFfourth = parseFloat(document.getElementById("secondCoefficientQFfourth").value, 10) || 0,
    constantQFfourth = parseFloat(document.getElementById("constantQFfourth").value, 10) || 0,
    extremaQFfourth,
    firstVFQFfourth,
    xVertexQFfourth,
    yVertexQFfourth,
    secondVFQFfourth,
    thirdVFQFfourth,
    x1VertexQFfourth,
    y1VertexQFfourth,
    firstQFfourth,
    secondQFfourth,
    x1InterceptQFfourth,
    x2InterceptQFfourth,
    yInterceptQFfourth;

    if(firstCoefficientQFfourth > 0){
      extremaQFfourth = "minimum";
    }

    if(firstCoefficientQFfourth < 0){
      extremaQFfourth = "maximum";
    }

    if(firstCoefficientQFfourth == 0){
      alert("This is not a Quadratic Function");
      return false;
    }
    
    firstVFQFfourth = firstCoefficientQFfourth;

    xVertexQFfourth = (-1 * secondCoefficientQFfourth) / (2 * firstCoefficientQFfourth);

    secondVFQFfourth = xVertexQFfourth;

    yVertexQFfourth = (firstCoefficientQFfourth * Math.pow(xVertexQFfourth, 2)) + (secondCoefficientQFfourth * xVertexQFfourth) + constantQFfourth;

    thirdVFQFfourth = yVertexQFfourth;
  
    x1VertexQFfourth = xVertexQFfourth;

    y1VertexQFfourth = yVertexQFfourth;

    firstQFfourth = -1 * secondCoefficientQFfourth;

    secondQFfourth = Math.sqrt(Math.pow(secondCoefficientQFfourth, 2) - (4 * firstCoefficientQFfourth * constantQFfourth));

    x1InterceptQFfourth = (firstQFfourth + secondQFfourth) / (2 * firstCoefficientQFfourth);

    x2InterceptQFfourth = (firstQFfourth - secondQFfourth) / (2 * firstCoefficientQFfourth);

    yInterceptQFfourth = constantQFfourth;
  

  document.getElementById("extremaQFfourth").value = extremaQFfourth;
  document.getElementById("firstVFQFfourth").value = firstVFQFfourth;
  document.getElementById("xVertexQFfourth").value = xVertexQFfourth;
  document.getElementById("secondVFQFfourth").value = secondVFQFfourth;
  document.getElementById("yVertexQFfourth").value = yVertexQFfourth;
  document.getElementById("thirdVFQFfourth").value = thirdVFQFfourth;
  document.getElementById("x1VertexQFfourth").value = x1VertexQFfourth;
  document.getElementById("y1VertexQFfourth").value = y1VertexQFfourth;
  document.getElementById("x1InterceptQFfourth").value = x1InterceptQFfourth;
  document.getElementById("x2InterceptQFfourth").value = x2InterceptQFfourth;
  document.getElementById("yInterceptQFfourth").value = yInterceptQFfourth;
}