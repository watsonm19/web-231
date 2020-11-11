/*
================================================
; Title: Exercise 4.3 - Filtering
; Author: Professor Krasso
; Date: 11 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to iterate through arrays and use conditionals to select specific values within the array. Prints selected values to the console.
================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

// string array of vehicles
const vehicles = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

/**
 * Params: array, value
 * Response: iterate through a given array and print any element that is equal to "value" (2nd argument)
 * Description: logs to the console every element of a given array that matches the "val" argument
 */
function getValue(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log(arr[i]);
    }
  }
}

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 4.3'), '\n') //new line

// output - all array elements in "vehicles"
console.log('-- DISPLAYING ARRAY ITEMS --');
for (let j = 0; j < vehicles.length; j++) {
  console.log(vehicles[j]);
}
console.log(''); //new line

// output - selected values in array
console.log('-- SELECTED VALUE --');
getValue(vehicles, 'Motorcycle'); //invoke function
console.log(''); //new line

console.log('-- SELECTED VALUE --');
getValue(vehicles, 'Bus'); //invoke function


// end program
