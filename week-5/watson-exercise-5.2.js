/*
================================================
; Title: Exercise 5.2 - ES5 Built-In Functions
; Author: Professor Krasso
; Date: 18 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to use the forEach() method to iterate through a given array. Prints values to the console.
================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');
// a string array of favorite foods
const faveFoods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 5.2'), '\n'); //new line

// output - iterates through faveFoods array using forEach() method and prints the value of each element to the console
faveFoods.forEach(food => {
  console.log(food);
})


// end program
