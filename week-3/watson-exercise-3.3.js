/*
===============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 6 November 2020
; Modified By: Mark Watson
; Description: Displays a string message that is dependent on the eventKeyCode variable value. Demonstrates the use of a switch statement.
===============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/


// start program


// imports watson-header.js file for use
const header = require('../watson-header');

// variable
let eventKeyCode = 13;

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 3.3') + '\n'); //new line

// output - switch statement with variable as expression
switch (eventKeyCode) {
  case 13:
  console.log('The enter key was pressed.')
  break;

  case 16:
  console.log('The shift key was pressed.')
  break;

  case 32:
  console.log('The spacebar key was pressed.')
  break;

  case 8:
  console.log('The backspace / delete key was pressed.')
  break;

  default:
  console.log('Unrecognized key.')
  break;
}


// end program
