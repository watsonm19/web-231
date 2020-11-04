/*
===============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 2 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to define and invoke functions with parameters and use them as values.
===============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/


//start program


// imports watson-header.js for use
const header = require('../watson-header');

// six (6) test variables
let testVar1 = 'Truck';
let testVar2 = 'Car';
let testVar3 = 'Bike';
let testVar4 = 'Bike';
let testVar5 = 'Four';
let testVar6 = 'Three';

/**
 * Params: argument 1, argument 2 - any value.
 * Response: compare the two arguments to check if they are equal.
 * Description: returns 'true' boolean if the input argument values are equal, otherwise returns 'false' boolean.
 */
function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Params: argument 1, argument 2 - any value
 * Response: log the two arguments within a concatenated string
 * Description: logs to the console a statement that the two arguments "do not match"
 */
function logMismatch(arg1, arg2) {
  console.log(`${arg1} and ${arg2} do not match!`);
}

/**
 * Params: argument 1, argument 2 - any value
 * Response: log the two arguments within a concatenated string
 * Description: logs to the console a statement that the two arguments "do match"
 */
function logMatch(arg1, arg2) {
  console.log(`${arg1} and ${arg2} do match!`);
}

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 3.2') + '\n'); //new line

// output test from match() function
console.log(match('willow', 'yuni'));
console.log(match(7, 7));

console.log(''); //new line

// output of conditional if...else statements with the six (6) test variables as the argument values
if (match(testVar1, testVar2) === true) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4) === true) {
  logMatch(testVar3, testVar4);
} else {
  logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6) === true) {
  logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}


//end program
