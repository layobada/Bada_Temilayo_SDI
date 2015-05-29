/*
 Temilayo Bada
 5/28/2015
 Section 02
 Functions Assignment Week 4
 */

//alert("Testing to see if attached.");

//Create a function to calculate Buoyant force
// We have three variables in the formula which are Density,Volume and Weight
var density= 5
var volume = 4
var  weight = 6

var sum = buoyantForce(5,4,6);

//creating functions using parameter
function buoyantForce(density,volume,weight){
    //using the returning values method
    var force = density*volume*weight;
     return force;
}
//console.log using var sum
console.log(sum);


//create a function to calculate the the force of a moving car
//we have two variables in the formular which are mass and acceleration
//create a function using anonymous function

var mass = 24
var acceleration = 12

//calculating the function using parameter
var force = function force(mass,acceleration){
    //using the returning value method
    var force = mass * acceleration;
    return force;
}
//declaring the function invocation
//console.log using the var total
var total = force(24,12)
console.log(total);

//validate prompt
//please ask user to type in name
var name= prompt("please type in your name");

//create a calculator for the rough estimate of worshippers in a church

// not sure of the population so we can use number of tithe payers and non tithe payers

var tithePayers= prompt("Type in the exact number of tithe payers.\nPlease strictly numbers!");

//using number of non-tithe payers
var nonTithePayers= prompt("Type in the exact number of non-tithe payers.\nPlease strictly numbers!");

//To calculate the number of worshipers in the church
//cast the nonTithePayers as a number
var total = Number(tithePayers) + Number(nonTithePayers);

//alert and console.log the user with the result
alert(" population " + "is " +total);
console.log (" population " + "is " +total);

/*
//defining the test values
I typed in number of tithe payers as 25
I typed in number of non tithe payers as 15
i requested for the total
it gives me 40

Testing the values
i typed in 5 for number of tithe payers
i typed in 10 for number of tithe payers


 */


