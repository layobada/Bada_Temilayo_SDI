/*
 Temilayo Bada
 5/21/2015
 Section 02
 Conditionals Assignment Week 3
 */

//alert("Testing to see if connected.");

//Create a calculator that can sum up how many animals in a zoo

//Create a zoo as an array
var zoo = ["lion","tiger","monkey","elephant"];
//print out the whole array
console.log(zoo);


//using index number to identify the array
//index number 0,1,2,3

console.log(zoo[0]);
console.log(zoo[1]);
console.log(zoo[2]);
console.log(zoo[3]);

//To check how many items are in the array using Dot Syntax
console.log(zoo.length);

//write out the variables for the number of each animals in the zoo

var numLion = 4;
var numTiger = 5;
var numMonkey = 8
var numElephant = 9;

//using conditional statements

if(numLion===numTiger){
    //code will run if they are the same number
    console.log("number of lion and tiger are the same");
} else{
    //code will run if they are not the same
    console.log("number of lion and tiger are not the same");
}

//using else if statement to determine the numbers of animals in the zoo

if (numMonkey===numElephant) {
    //code will run if the are the number
    console.log("number of monkey and elephant are the same");
} else{
    //code will run if they are not the same
    console.log("number of monkey and elephant are not the same");
}
