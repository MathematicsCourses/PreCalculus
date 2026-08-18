/*
    Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.samdomforpeace.com
    https://samuelchukwuemeka.github.io/expressions-equations/   
*/

"use strict";

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display === '')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}

// Help with converting answers to fractions: Modified from - https://stackoverflow.com/questions/14783869/convert-a-decimal-number-to-a-fraction-rational-number
//Math.fraction = function (x) {
//      return x ? +x ? x.toString().includes(".") ? x.toString().replace(".", "") / (function (a, b) {
//        return b ? arguments.callee(b, a % b) : a;
//  })(x.toString().replace(".", ""), "1" + "0".repeat(x.toString().split(".")[1].length)) + "/" + ("1" + "0".repeat(x.toString().split(".")[1].length)) / (function (a, b) {
//    return b ? arguments.callee(b, a % b) : a;
// })(x.toString().replace(".", ""), "1" + "0".repeat(x.toString().split(".")[1].length)) : x + "/1" : NaN : void 0;
//};


// Quadratic Equations Calculations
// Given: a quadratic equation in standard form
// To Find: other details

document.getElementById("quadraticEquationStandardForm").addEventListener("submit", quadraticEquationStandardForm);

function quadraticEquationStandardForm(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstTerm = parseFloat(document.getElementById("firstTerm").value, 10) || 0,
            secondTerm = parseFloat(document.getElementById("secondTerm").value, 10) || 0,
            thirdTerm = parseFloat(document.getElementById("thirdTerm").value, 10) || 0,
            discriminantValue,
            discriminantMessage1,
            discriminantMessage2,
            discriminantMessage3,
            natureRootMessage,
            root1,
            root2,
            roots,
            sumRoots,
            productRoots;



    discriminantValue = (secondTerm * secondTerm) - (4 * firstTerm * thirdTerm);
    document.getElementById("discriminantValue").innerHTML = "The discriminant is " + discriminantValue;

    if ((discriminantValue > 0) && (Math.sqrt(discriminantValue) % 1 === 0)) {
        discriminantMessage1 = "The discriminant is positive";
        document.getElementById("discriminantMessage1").innerHTML = discriminantMessage1;
        discriminantMessage2 = "The discriminant is a perfect square";
        document.getElementById("discriminantMessage2").innerHTML = discriminantMessage2;
        discriminantMessage3 = "Because the discriminant is positive and is a perfect square, the quadratic equation can be solved by Factoring";
        document.getElementById("discriminantMessage3").innerHTML = discriminantMessage3;
        natureRootMessage = "The quadratic equation has two rational roots";
        document.getElementById("natureRootMessage").innerHTML = natureRootMessage;
    } else if ((discriminantValue > 0) && (Math.sqrt(discriminantValue) % 1 !== 0)) {
        discriminantMessage1 = "The discriminant is positive";
        document.getElementById("discriminantMessage1").innerHTML = discriminantMessage1;
        discriminantMessage2 = "The discriminant is not a perfect square";
        document.getElementById("discriminantMessage2").innerHTML = discriminantMessage2;
        discriminantMessage3 = "Because the discriminant is positive but not a perfect square, the quadratic equation cannot be solved by Factoring";
        document.getElementById("discriminantMessage3").innerHTML = discriminantMessage3;
        natureRootMessage = "The quadratic equation has two irrational roots";
        document.getElementById("natureRootMessage").innerHTML = natureRootMessage;
    }

    if (discriminantValue < 0) {
        discriminantMessage1 = "The discriminant is negative";
        document.getElementById("discriminantMessage1").innerHTML = discriminantMessage1;
        discriminantMessage3 = "The quadratic equation cannot be solved by Factoring";
        document.getElementById("discriminantMessage3").innerHTML = discriminantMessage3;
        natureRootMessage = "The quadratic equation has two imaginary roots";
        document.getElementById("natureRootMessage").innerHTML = natureRootMessage;
        root1 = math.eval(((-1 * secondTerm) + Math.sqrt(discriminantValue)) / (2 * firstTerm));
        root2 = math.eval(((-1 * secondTerm) - Math.sqrt(discriminantValue)) / (2 * firstTerm));
        roots = "The solutions are: " + root1 + " and " + root2;
        document.getElementById("roots").innerHTML = roots;
    }

    if (discriminantValue === 0) {
        discriminantMessage1 = "The discriminant is zero";
        document.getElementById("discriminantMessage1").innerHTML = discriminantMessage1;
        discriminantMessage3 = "The quadratic equation can be solved by Factoring";
        document.getElementById("discriminantMessage3").innerHTML = discriminantMessage3;
        natureRootMessage = "The quadratic equation has one repeated rational root";
        document.getElementById("natureRootMessage").innerHTML = natureRootMessage;
    }

    root1 = ((-1 * secondTerm) + Math.sqrt(discriminantValue)) / (2 * firstTerm);

    root2 = ((-1 * secondTerm) - Math.sqrt(discriminantValue)) / (2 * firstTerm);

    sumRoots = root1 + root2;

    productRoots = root1 * root2;

    roots = "The solutions are: " + root1 + " and " + root2;
    document.getElementById("roots").innerHTML = roots;

    document.getElementById("sumRoots").innerHTML = "The sum of roots is " + sumRoots;
    document.getElementById("productRoots").innerHTML = "The product of roots is " + productRoots;
}