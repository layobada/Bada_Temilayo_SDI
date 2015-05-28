/*
 Temilayo Bada
 5/28/2015
 Section 02
 Functions Assignment Week 4
 */

//alert("Testing to see if attached.");

//Create a function to calculate Buoyant force
// We have three variables in the formula Density,Volume and Weight
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