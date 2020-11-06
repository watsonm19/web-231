/*
===============================================
; Title: Assignment 3.4 - Loops
; Author: Professor Krasso
; Date: 6 November 2020
; Modified By: Mark Watson
; Description: Displays a repeated loop of string messages that are each dependent on the 'num' global variable and the 'randomNum' local variable (a randomly generated number) values. The loop repeats ten (10) times, which will test and log whether the variables match or not. Demonstrates the use of a for loop that utilizes a conditional statement within the statement of the loop.
===============================================
*/

/*

Expected output:

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
  6 does not match 5!
*/


// start program


// imports watson-header.js file for use
const header = require('../watson-header');

// variable
const num = 6;

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

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
console.log(header.display('Mark', 'Watson', 'Assignment 3.4') + '\n'); //new line

// output - for loop that logs a string stating whether the variables (global and local) match or not. Loop repeats 10 times. Local variable changes with every loop.
for (i = 0; i < 10; i++) {
  let randomNum = randomNumber();

  if (match(num, randomNum)) {
    logMatch(num, randomNum);
  } else {
    logMismatch(num, randomNum);
  }
}


// end program
