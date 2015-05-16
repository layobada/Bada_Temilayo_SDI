/*
Temilayo Bada
5/13/2015
Section 02
Expressions Assignment Week 2
 */

//alert("Testing to see if connected.");

//Create a calculator for how much rent i pay per year

//Ask the user for name
var name = prompt ('Please type in your name.');

//Send a welcome message to user with variable
alert("welcome "+name+" ! ");

//Ask user how much is the rent per month
var rentPerMonth = prompt ("How much is rent per month?");

//Apply console.log to check the result
console.log(rentPerMonth);

//calculate rent for twelve months

var twelveMonths = 12

//To calculate rent for twelve months
var rent = twelveMonths * rentPerMonth;

//alert and console.log the user with the result
alert (name+" you pay "+rent+" per year");
console.log (name+" you pay "+rent+" per year");

//ask how much is rent for multiple years
var multipleYears = prompt("how many years do you want to know?")

console.log(multipleYears);

//To calculate how much in two years is multipleYears and Rent per year
var twoYears = rent;
twoYears+=rent;

console.log(twoYears);

//Alert and console.log the expression for the result

console.log(name + " you will be paying " +  twoYears + " in "+ multipleYears + " years.");

alert(name + " you will be paying " +  twoYears + " in "+ multipleYears + " years.");

//Create an array for the test values
//Use array to calculate the total of the test values

var testValues = [500, 6000, 12000];
var sum = testValues[0] + testValues[1] + testValues [2];

console.log(sum);

// Type in test Values
/*
 I entered 500 for the amount of rent
 I typed in the amount of rent for 12 months
 It said 6000
 I typed in the amount of rent for 2 years
 It said 12000
 */




