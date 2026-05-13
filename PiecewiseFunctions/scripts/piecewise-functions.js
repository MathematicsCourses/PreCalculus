// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.piecewise-functions.appspot.com
// www.chukwuemeka-samuel.appspot.com

"use strict";

// https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/23560569#23560569
//Answered by Shura
function round(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}


// Calculate the Greatest Integer Function 
document.getElementById("greatestInteger").addEventListener("submit", greatestInteger);
function greatestInteger(event) {
    event.preventDefault();
    event.stopPropagation();

    var numberGIF = parseFloat(document.getElementById("numberGIF").value, 10) || 0,
        answerGIF;
    
        answerGIF = math.floor(numberGIF);
                   
document.getElementById("answerGIF").value = answerGIF;
}


// Calculate the Least Integer Function 
document.getElementById("leastInteger").addEventListener("submit", leastInteger);
function leastInteger(event) {
    event.preventDefault();
    event.stopPropagation();

    var numberLIF = parseFloat(document.getElementById("numberLIF").value, 10) || 0,
        answerLIF;
    
        answerLIF = math.ceil(numberLIF);
                   
document.getElementById("answerLIF").value = answerLIF;
}


// Calculate the Absolute Value Function 
document.getElementById("absoluteValue").addEventListener("submit", absoluteValue);
function absoluteValue(event) {
    event.preventDefault();
    event.stopPropagation();

    var numberAVF = parseFloat(document.getElementById("numberAVF").value, 10) || 0,
        answerAVF;
    
        answerAVF = Math.abs(numberAVF);
                   
document.getElementById("answerAVF").value = answerAVF;
}



// Water Bill Calculator 
document.getElementById("waterBillForm").addEventListener("submit", waterBillForm);
function waterBillForm(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var initialReading = parseFloat(document.getElementById("initialReading").value, 10) || 0,
        finalReading = parseFloat(document.getElementById("finalReading").value, 10) || 0,
        tax = parseFloat(document.getElementById("tax").value, 10) || 0,
        taxUnit = document.getElementById("taxUnit").value,
        firstName = document.getElementById("firstName").value,
        lastName = document.getElementById("lastName").value,
        presentDate,
        yesterdayDate,
        previousDate,
        presentHour,
        greeting,
        gallonsUsed,
        basicFee,
        basicFeeTax,
        totalBill,
        dates;

    presentDate = new Date();
    presentDate.getDate();
    
    presentHour = presentDate.getHours();
    
    yesterdayDate = new Date();
    yesterdayDate.setDate(presentDate.getDate() - 1);
    yesterdayDate = new Date(yesterdayDate).toUTCString();
    yesterdayDate = yesterdayDate.split(' ').slice(0, 4).join(' ');
    
       
    previousDate = new Date();
    previousDate.setMonth(previousDate.getMonth() - 1);
    //previousDate.toDateString();
    previousDate = new Date(previousDate).toUTCString();
    previousDate = previousDate.split(' ').slice(0, 4).join(' ');
    
    
    if (presentHour < 12) {
        greeting = "Good morning";
    } else if (presentHour >= 12 && presentHour < 16) {
        greeting = "Good afternoon";
    } else if (presentHour >= 16 && presentHour <= 24) {
        greeting = "Good evening";
    }
    
    dates = "This is your Water Bill Statement printed today: " + presentDate + "<br>";
    dates += "<u>This bill covers the water usage from:</u><br>"; 
    dates += "<mark>"+ previousDate + "</mark>" + " to " + "<mark>" + yesterdayDate + "</mark>";
    
    if (finalReading < initialReading){
        alert("Error: The final reading cannot be less than the initial reading");
        quit();
    }
    
    if ((initialReading < 0) || (finalReading < 0) || (tax < 0)){
        alert("Error: \nThe initial reading cannot be less than zero. OR \nThe final reading cannot be less than zero. OR \nThe tax cannot be less than zero.");
        quit();
    }
    
    gallonsUsed = finalReading - initialReading;
    
      
    if (gallonsUsed <= 3000) {
        basicFee = 17.35;
    } 
    else if (gallonsUsed > 3000 && gallonsUsed <= 5000) {
        basicFee = 0.00524 * gallonsUsed + 1.63;
    } 
    else if (gallonsUsed > 5000 && gallonsUsed <= 10000) {
        basicFee = 0.00396 * gallonsUsed + 8.03;
    } 
    else {
        basicFee = 0.0031 * gallonsUsed + 16.63;
    }


      
    if (taxUnit === "percent") {
        tax = tax / 100;
        basicFeeTax = basicFee * tax;
    }
    else 
    {
        basicFeeTax = tax;
    }
    
    

    totalBill = basicFee + basicFeeTax;
                   
document.getElementById("greeting").innerHTML = greeting + " " + firstName + " " + lastName;
document.getElementById("dates").innerHTML = dates;
document.getElementById("initialReadingReport").innerHTML = "The initial reading on your water meter is " + initialReading + " gallons";
document.getElementById("finalReadingReport").innerHTML = "The final reading on your water meter (as of yesterday) is " + finalReading + " gallons";
document.getElementById("gallonsUsed").innerHTML = "The number of gallons used is " + gallonsUsed;
document.getElementById("basicFee").innerHTML = "The basic fee for the number of gallons used is $" + round(basicFee, 2).toFixed(2);
document.getElementById("taxReport").innerHTML = "The tax is $" + round(basicFeeTax, 2).toFixed(2);
document.getElementById("totalBill").innerHTML = "The total water bill is " + "<mark>$" + round(totalBill, 2).toFixed(2) + "</mark>";
document.getElementById("appreciation").innerHTML = "Thank you for allowing us to serve you. We appreciate your payment.";
}



// Power Bill Calculator - Summer
document.getElementById("powerBillFormSummer").addEventListener("submit", powerBillFormSummer);
function powerBillFormSummer(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var initialReadingPowerSummer = parseFloat(document.getElementById("initialReadingPowerSummer").value, 10) || 0,
        finalReadingPowerSummer = parseFloat(document.getElementById("finalReadingPowerSummer").value, 10) || 0,
        taxPowerSummer = parseFloat(document.getElementById("taxPowerSummer").value, 10) || 0,
        taxUnitPowerSummer = document.getElementById("taxUnitPowerSummer").value,
        firstNamePowerSummer = document.getElementById("firstNamePowerSummer").value,
        lastNamePowerSummer = document.getElementById("lastNamePowerSummer").value,
        presentDatePowerSummer,
        yesterdayDatePowerSummer,
        previousDatePowerSummer,
        presentHourPowerSummer,
        greetingPowerSummer,
        powerConsumedSummer,
        basicFeePowerSummer,
        basicFeeTaxPowerSummer,
        totalBillPowerSummer,
        datesPowerSummer;

    presentDatePowerSummer = new Date();
    presentDatePowerSummer.getDate();
    
    presentHourPowerSummer = presentDatePowerSummer.getHours();
    
    yesterdayDatePowerSummer = new Date();
    yesterdayDatePowerSummer.setDate(presentDatePowerSummer.getDate() - 1);
    yesterdayDatePowerSummer = new Date(yesterdayDatePowerSummer).toUTCString();
    yesterdayDatePowerSummer = yesterdayDatePowerSummer.split(' ').slice(0, 4).join(' ');
    
       
    previousDatePowerSummer = new Date();
    previousDatePowerSummer.setMonth(previousDatePowerSummer.getMonth() - 1);
    //previousDate.toDateString();
    previousDatePowerSummer = new Date(previousDatePowerSummer).toUTCString();
    previousDatePowerSummer = previousDatePowerSummer.split(' ').slice(0, 4).join(' ');
    
    
    if (presentHourPowerSummer < 12) {
        greetingPowerSummer = "Good morning";
    } else if (presentHourPowerSummer >= 12 && presentHourPowerSummer < 16) {
        greetingPowerSummer = "Good afternoon";
    } else if (presentHourPowerSummer >= 16 && presentHourPowerSummer <= 24) {
        greetingPowerSummer = "Good evening";
    }
    
    datesPowerSummer = "This is your Power Bill Statement printed today: " + presentDatePowerSummer + "<br>";
    datesPowerSummer += "<u>This bill covers the power consumption from:</u><br>"; 
    datesPowerSummer += "<mark>"+ previousDatePowerSummer + "</mark>" + " to " + "<mark>" + yesterdayDatePowerSummer + "</mark>";
    
    if (finalReadingPowerSummer < initialReadingPowerSummer){
        alert("Error: The final reading cannot be less than the initial reading");
        quit();
    }
    
    if ((initialReadingPowerSummer < 0) || (finalReadingPowerSummer < 0) || (taxPowerSummer < 0)){
        alert("Error: \nThe initial reading cannot be less than zero. OR \nThe final reading cannot be less than zero. OR \nThe tax cannot be less than zero.");
        quit();
    }
    
    powerConsumedSummer = finalReadingPowerSummer - initialReadingPowerSummer;
    
      
    if (powerConsumedSummer >= 0 && powerConsumedSummer <= 650) {
        basicFeePowerSummer = 0.056582 * powerConsumedSummer + 10;
    } 
    else if (powerConsumedSummer > 650 && powerConsumedSummer <= 1000) {
        basicFeePowerSummer = 0.093983 * powerConsumedSummer - 14.31065;
    } 
    else {
        basicFeePowerSummer = 0.097273 * powerConsumedSummer - 17.60065;
    }


      
    if (taxUnitPowerSummer === "percent") {
        taxPowerSummer = taxPowerSummer / 100;
        basicFeeTaxPowerSummer = taxPowerSummer * basicFeePowerSummer;
    }
    else
    {
        basicFeeTaxPowerSummer = taxPowerSummer;
    }
    
    totalBillPowerSummer = basicFeePowerSummer + basicFeeTaxPowerSummer;
                   
document.getElementById("greetingPowerSummer").innerHTML = greetingPowerSummer + " " + firstNamePowerSummer + " " + lastNamePowerSummer;
document.getElementById("datesPowerSummer").innerHTML = datesPowerSummer;
document.getElementById("initialReadingReportPowerSummer").innerHTML = "The initial reading on your meter is " + initialReadingPowerSummer + " Kwh";
document.getElementById("finalReadingReportPowerSummer").innerHTML = "The final reading on your meter (as of yesterday) is " + finalReadingPowerSummer + " KWh";
document.getElementById("powerConsumedSummer").innerHTML = "The KWh of power consumed is " + powerConsumedSummer;
document.getElementById("basicFeePowerSummer").innerHTML = "The fee for the KWh of power consumed is $" + round(basicFeePowerSummer, 2).toFixed(2);
document.getElementById("taxReportPowerSummer").innerHTML = "The tax is $" + round(basicFeeTaxPowerSummer, 2).toFixed(2);
document.getElementById("totalBillPowerSummer").innerHTML = "The total power bill is " + "<mark>$" + round(totalBillPowerSummer, 2).toFixed(2) + "</mark>";
document.getElementById("appreciationPowerSummer").innerHTML = "Thank you for allowing us to serve you. We appreciate your payment.";
}



// Power Bill Calculator - Winter
document.getElementById("powerBillFormWinter").addEventListener("submit", powerBillFormWinter);
function powerBillFormWinter(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var initialReadingPowerWinter = parseFloat(document.getElementById("initialReadingPowerWinter").value, 10) || 0,
        finalReadingPowerWinter = parseFloat(document.getElementById("finalReadingPowerWinter").value, 10) || 0,
        taxPowerWinter = parseFloat(document.getElementById("taxPowerWinter").value, 10) || 0,
        taxUnitPowerWinter = document.getElementById("taxUnitPowerWinter").value,
        firstNamePowerWinter = document.getElementById("firstNamePowerWinter").value,
        lastNamePowerWinter = document.getElementById("lastNamePowerWinter").value,
        presentDatePowerWinter,
        yesterdayDatePowerWinter,
        previousDatePowerWinter,
        presentHourPowerWinter,
        greetingPowerWinter,
        powerConsumedWinter,
        basicFeePowerWinter,
        basicFeeTaxPowerWinter,
        totalBillPowerWinter,
        datesPowerWinter;

    presentDatePowerWinter = new Date();
    presentDatePowerWinter.getDate();
    
    presentHourPowerWinter = presentDatePowerWinter.getHours();
    
    yesterdayDatePowerWinter = new Date();
    yesterdayDatePowerWinter.setDate(presentDatePowerWinter.getDate() - 1);
    yesterdayDatePowerWinter = new Date(yesterdayDatePowerWinter).toUTCString();
    yesterdayDatePowerWinter = yesterdayDatePowerWinter.split(' ').slice(0, 4).join(' ');
    
       
    previousDatePowerWinter = new Date();
    previousDatePowerWinter.setMonth(previousDatePowerWinter.getMonth() - 1);
    //previousDate.toDateString();
    previousDatePowerWinter = new Date(previousDatePowerWinter).toUTCString();
    previousDatePowerWinter = previousDatePowerWinter.split(' ').slice(0, 4).join(' ');
    
    
    if (presentHourPowerWinter < 12) {
        greetingPowerWinter = "Good morning";
    } else if (presentHourPowerWinter >= 12 && presentHourPowerWinter < 16) {
        greetingPowerWinter = "Good afternoon";
    } else if (presentHourPowerWinter >= 16 && presentHourPowerWinter <= 24) {
        greetingPowerWinter = "Good evening";
    }
    
    datesPowerWinter = "This is your Power Bill Statement printed today: " + presentDatePowerWinter + "<br>";
    datesPowerWinter += "<u>This bill covers the power consumption from:</u><br>"; 
    datesPowerWinter += "<mark>"+ previousDatePowerWinter + "</mark>" + " to " + "<mark>" + yesterdayDatePowerWinter + "</mark>";
    
    if (finalReadingPowerWinter < initialReadingPowerWinter){
        alert("Error: The final reading cannot be less than the initial reading");
        quit();
    }
    
    if ((initialReadingPowerWinter < 0) || (finalReadingPowerWinter < 0) || (taxPowerWinter < 0)){
        alert("Error: \nThe initial reading cannot be less than zero. OR \nThe final reading cannot be less than zero. OR \nThe tax cannot be less than zero.");
        quit();
    }
    
    powerConsumedWinter = finalReadingPowerWinter - initialReadingPowerWinter;
    
      
    if (powerConsumedWinter >= 0 && powerConsumedWinter <= 650) {
        basicFeePowerWinter = 0.056582 * powerConsumedWinter + 10;
    } 
    else if (powerConsumedWinter > 650 && powerConsumedWinter <= 1000) {
        basicFeePowerWinter = 0.048533 * powerConsumedWinter + 15.23185;
    } 
    else {
        basicFeePowerWinter = 0.047641 * powerConsumedWinter + 16.12385;
    }


      
    if (taxUnitPowerWinter === "percent") {
        taxPowerWinter = taxPowerWinter / 100;
        basicFeeTaxPowerWinter = taxPowerWinter * basicFeePowerWinter;
    }
    else
    {
        basicFeeTaxPowerWinter = taxPowerWinter;
    }   

    totalBillPowerWinter = basicFeePowerWinter + basicFeeTaxPowerWinter;
                   
document.getElementById("greetingPowerWinter").innerHTML = greetingPowerWinter + " " + firstNamePowerWinter + " " + lastNamePowerWinter;
document.getElementById("datesPowerWinter").innerHTML = datesPowerWinter;
document.getElementById("initialReadingReportPowerWinter").innerHTML = "The initial reading on your meter is " + initialReadingPowerWinter + " Kwh";
document.getElementById("finalReadingReportPowerWinter").innerHTML = "The final reading on your meter (as of yesterday) is " + finalReadingPowerWinter + " Kwh";
document.getElementById("powerConsumedWinter").innerHTML = "The KWh of power consumed is " + powerConsumedWinter;
document.getElementById("basicFeePowerWinter").innerHTML = "The fee for the KWh of power consumed is $" + round(basicFeePowerWinter, 2).toFixed(2);
document.getElementById("taxReportPowerWinter").innerHTML = "The tax is $" + round(basicFeeTaxPowerWinter, 2).toFixed(2);
document.getElementById("totalBillPowerWinter").innerHTML = "The total power bill is " + "<mark>$" + round(totalBillPowerWinter, 2).toFixed(2) + "</mark>";
document.getElementById("appreciationPowerWinter").innerHTML = "Thank you for allowing us to serve you. We appreciate your payment.";
}


// Tax Income Calculator - 2018
document.getElementById("incomeTaxForm").addEventListener("submit", incomeTaxForm);
function incomeTaxForm(event) {
    event.preventDefault();
    event.stopPropagation();

    var taxableIncome = parseFloat(document.getElementById("taxableIncome").value, 10) || 0,
        firstNameIncomeTax = document.getElementById("firstNameIncomeTax").value,
        lastNameIncomeTax = document.getElementById("lastNameIncomeTax").value,
        filingOptions = document.getElementById("filingOptions").value,
        incomeTax,
        presentDateIncomeTax,
        presentHourIncomeTax,
        previousDateTax,
        greetingIncomeTax,
        datesIncomeTax,
        option = document.querySelector("#filingOptions"),
        selected = option.value;
        
    presentDateIncomeTax = new Date();
    presentDateIncomeTax.getDate();

    presentHourIncomeTax = presentDateIncomeTax.getHours();

    if (presentHourIncomeTax < 12) {
        greetingIncomeTax = "Good morning";
    } else if (presentHourIncomeTax >= 12 && presentHourIncomeTax < 16) {
        greetingIncomeTax = "Good afternoon";
    } else if (presentHourIncomeTax >= 16 && presentHourIncomeTax <= 24) {
        greetingIncomeTax = "Good evening";
    }

    previousDateTax = new Date();
    previousDateTax.setFullYear(previousDateTax.getFullYear() - 2);
    //previousDate.toDateString();
    previousDateTax = new Date(previousDateTax).toUTCString();
    previousDateTax = previousDateTax.split(' ').slice(3, 4).join(' ');

    datesIncomeTax = "This is your <mark>Income Tax Statement</mark> printed today: " + presentDateIncomeTax + "<br>";
    datesIncomeTax += "This tax statement is for income earned during <mark>" + previousDateTax + " year</mark>";

        

    if (taxableIncome < 0){
        alert("Error: The taxable income cannot be less than zero.");
        quit();
    }

    // Conditional Statement for the Filing Options
    // Nested Ifs
    // Piecewise Function for the Single filing  
    
    if(filingOptions === "single")
   {
        if (taxableIncome >= 0 && taxableIncome <= 9525) 
        {
            incomeTax = 0.1 * taxableIncome;
        } 
        else if (taxableIncome > 9525 && taxableIncome <= 38700) 
        {
            incomeTax = 0.12 * taxableIncome - 190.5;
        } 
        else if (taxableIncome > 38700 && taxableIncome <= 82500) 
        {
            incomeTax = 0.22 * taxableIncome - 4060.5;
        } 
        else if (taxableIncome > 82500 && taxableIncome <= 157500) 
        {
            incomeTax = 0.24 * taxableIncome - 5710.5;
        } 
        else if (taxableIncome > 157500 && taxableIncome <= 200000) 
        {
            incomeTax = 0.32 * taxableIncome - 18310.5;
        } 
        else if (taxableIncome > 200000 && taxableIncome <= 500000) 
        {
            incomeTax = 0.35 * taxableIncome - 24310.5;
        } 
        else 
        {
            incomeTax = 0.37 * taxableIncome - 34310.5;
        }
    }

    if(filingOptions === "headHousehold")
   {
        if (taxableIncome >= 0 && taxableIncome <= 13600) 
        {
            incomeTax = 0.1 * taxableIncome;
        } 
        else if (taxableIncome > 13600 && taxableIncome <= 51800) 
        {
            incomeTax = 0.12 * taxableIncome - 272;
        } 
        else if (taxableIncome > 51800 && taxableIncome <= 82500) 
        {
            incomeTax = 0.22 * taxableIncome - 5452;
        } 
        else if (taxableIncome > 82500 && taxableIncome <= 157500) 
        {
            incomeTax = 0.24 * taxableIncome - 7102;
        } 
        else if (taxableIncome > 157500 && taxableIncome <= 200000) 
        {
            incomeTax = 0.32 * taxableIncome - 19702;
        } 
        else if (taxableIncome > 200000 && taxableIncome <= 500000) 
        {
            incomeTax = 0.35 * taxableIncome - 25702;
        } 
        else 
        {
            incomeTax = 0.37 * taxableIncome - 35702;
        }
    }

    if(filingOptions === "marriedJoint")
   {
        if (taxableIncome >= 0 && taxableIncome <= 19050) 
        {
            incomeTax = 0.1 * taxableIncome;
        } 
        else if (taxableIncome > 19050 && taxableIncome <= 77400) 
        {
            incomeTax = 0.12 * taxableIncome - 381;
        } 
        else if (taxableIncome > 77400 && taxableIncome <= 165000) 
        {
            incomeTax = 0.22 * taxableIncome - 8121;
        } 
        else if (taxableIncome > 165000 && taxableIncome <= 315000) 
        {
            incomeTax = 0.24 * taxableIncome - 11421;
        } 
        else if (taxableIncome > 315000 && taxableIncome <= 400000) 
        {
            incomeTax = 0.32 * taxableIncome - 36621;
        } 
        else if (taxableIncome > 400000 && taxableIncome <= 600000) 
        {
            incomeTax = 0.35 * taxableIncome - 48621;
        } 
        else 
        {
            incomeTax = 0.37 * taxableIncome - 60621;
        }
    }

    if(filingOptions === "marriedSeparate")
   {
        if (taxableIncome >= 0 && taxableIncome <= 9525) 
        {
            incomeTax = 0.1 * taxableIncome;
        } 
        else if (taxableIncome > 9525 && taxableIncome <= 38700) 
        {
            incomeTax = 0.12 * taxableIncome - 190.5;
        } 
        else if (taxableIncome > 38700 && taxableIncome <= 82500) 
        {
            incomeTax = 0.22 * taxableIncome - 4060.5;
        } 
        else if (taxableIncome > 82500 && taxableIncome <= 157000) 
        {
            incomeTax = 0.24 * taxableIncome - 5710.5;
        } 
        else if (taxableIncome > 157000 && taxableIncome <= 200000) 
        {
            incomeTax = 0.32 * taxableIncome - 18270.5;
        } 
        else if (taxableIncome > 200000 && taxableIncome <= 300000) 
        {
            incomeTax = 0.35 * taxableIncome - 24270.5;
        } 
        else 
        {
            incomeTax = 0.37 * taxableIncome - 30270.5;
        }
    }


    document.querySelector("#selected").textContent = selected;
    document.getElementById("greetingIncomeTax").innerHTML = greetingIncomeTax + " " + firstNameIncomeTax + " " + lastNameIncomeTax;
    document.getElementById("datesIncomeTax").innerHTML = datesIncomeTax;
    document.getElementById("selected").innerHTML = "You chose to file: <mark>" + selected + "</mark>";
    document.getElementById("taxableIncomeReport").innerHTML = "Your taxable income is $" + round(taxableIncome, 2).toFixed(2);
    document.getElementById("incomeTaxReport").innerHTML = "The federal income tax on your taxable income is <mark>$" + round(incomeTax, 2).toFixed(2) + "</mark>";
    document.getElementById("appreciationTax").innerHTML = "Thank you for allowing us to calculate your federal tax. <br>We would appreciate if you let us file your tax return.";
}