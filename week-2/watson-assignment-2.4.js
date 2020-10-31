/*
===============================================
; Title: Assignment 2.4 - Functions
; Author: Professor Krasso
; Date: 31 October 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to define and invoke functions with parameters and use them as values.
===============================================
*/

/*
  Expected output:

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

// test variables for functions
let firstName = 'Mark';
let lastName = 'Watson';
let currentYear = 2020;
let currentMonth = 10;
let currentDay = 31;
let temp = 33.578;
let decimalPlace = 1;
let age = '28 trips around the sun';
let savingsGoal = '20000.99 dollars in the bank';

/**
 * Params: first name, last name - string values
 * Response: concatenate first, 'space', and last
 * Description: returns the values assigned to first and last as one string - full name
 */
function fullName(first, last) {
  return first + ' ' + last;
}

/**
 * Params: current year, month, day values
 * Response: concatenate month, /, day, /, and year
 * Description: returns the values assigned to year, month, and day with format: month/day/year
 */
function dateWriter(year, month, day) {
  return month + '/' + day + '/' + year;
}

/**
 * Params: number, number of decimals
 * Response: number with specified number of decimals
 * Description: returns the value of the number with the amount of decimals specified in the second parameter
 */
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

/**
 * Params: string containing an integer
 * Response: parse string into integer
 * Description: returns the value of the stringInt as an integer
 */
function convertToInt(stringInt) {
  return parseInt(stringInt);
}

/**
 * Params: string containing an integer or floating-point number
 * Response: parse string into floating-point number
 * Description: returns the value of the stringFloat as a floating-point number
 */
function convertToFloat(stringFloat) {
  return parseFloat(stringFloat);
}

// header output
console.log(header.display('Mark', 'Watson', 'Assignment 2.4') + '\n');

// program output
console.log('Hello my name is ' + fullName(firstName, lastName) + '! \n');
// new line
console.log('Today\'s date is ' + dateWriter(currentYear, currentMonth, currentDay) + ' and the current temperature is ' + formatNumber(temp, decimalPlace) + ' degrees. \n');
// new line
console.log('I am ' + convertToInt(age) + ' years old and my savings account goal is ' + convertToFloat(savingsGoal) + ' dollars.');


// end program
