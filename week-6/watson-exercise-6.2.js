/*
===============================================
; Title: Exercise 6.2 - Exception Handling
; Author: Professor Krasso
; Date: 25 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates a simple example of how to use try/catch/finally to plan for and handle runtime errors.
===============================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

// test variable with a number value
let num = sqNum(10);

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 6.2'), '\n'); //new line

// output - based on success variable within try/catch/finally statement
try {
  // variable - true or false boolean based on statement
  const success = num < 100;

// if success is false, throw error
if (!success) throw 'NumberTooLargeException';
  // if success is true - output
  console.log(`SUCCESS -- The number (${num}) is less than 100`);
} catch (err) {
  // catch error - output
  console.log('Catch clause: ' + err);
} finally {
  // finally block - output
  console.log('Finally clause reached...');
}

/**
 * Params: number
 * Response: multiply a given number by its own value and return the new value
 * Description: squares a number
 */
function sqNum(num) {
  return num * num;
}


// end program
