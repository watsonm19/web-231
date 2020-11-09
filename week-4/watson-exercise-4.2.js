/*
===============================================
; Title: Exercise 4.2 - Arrays
; Author: Professor Krasso
; Date: 9 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to iterate through an array and retrieve each value. The values are printed to the console in this example.
===============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/


// start program


//imports watson-header.js for use
const header = require('../watson-header');

// string array
const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

/**
 * Params: array
 * Response: iterate through a given array and print each value in the array
 * Description: logs to the console every value in a given array
 */
function getFruit(arr) {
  // loop
  for (i = 0; i < arr.length; i++) {
    // loop output
    console.log(arr[i]);
  }
}

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 4.2'), '\n'); //new line

// output from getFruit() function
getFruit(fruits);


// end program
