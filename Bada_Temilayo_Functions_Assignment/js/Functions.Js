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
// Ask the user for name
var name = prompt('Please type in your name.');




