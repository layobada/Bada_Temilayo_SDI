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