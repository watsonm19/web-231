/*
============================================
; Title:  function-properties.js
; Author: Professor Krasso
; Date:   30 October 2020
; Modified By: Mark Watson
; Description: Demonstrates how to define and call function properties
;===========================================
*/

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// imports watson-header.js file for use
const header = require('../watson-header.js');

// function property definitions
myName.mark = 'Mark';
myName.watson = 'Watson';

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.mark;
}

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myLastName() {
  return myName.watson;
}

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 2.3'));
// new line
console.log('\n');
// output
console.log('Hello ' + myName() + ' ' + myLastName());


// end program
