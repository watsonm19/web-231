/*
================================================
; Title: Assignment 4.4 - Predicates
; Author: Professor Krasso
; Date: 12 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to use various array methods: forEach(), sort(), and filter() in order to iterate through, organize and filter data accordingly.
================================================
*/

/*
  Expected output:

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

// header output
console.log(header.display('Mark', 'Watson', 'Assignment 4.4'), '\n') //new line

// string array of five (5) states
const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];
// filtered version of states array using getState() function as predicate to filter() method
const filteredStates = states.filter(function(arrEl) {return getState(arrEl, 'Iowa')});

// output -- iterates through states array using forEach method to print each element separately, in order of index.
console.log('-- ORIGINAL ARRAY --');
states.forEach(function(state) {
  console.log(state);
})
console.log(''); //new line

// calls sort() method to sort & update states array in alphabetical order
states.sort();

// output -- iterates through the updated states array using forEach to print each element separately, in order of index.
console.log('-- SORTED ARRAY --');
states.forEach(function(sortedState) {
  console.log(sortedState);
})
console.log(''); //new line

// output -- prints first [index: 0] element of filteredStates array (only had one (1) element)
console.log('-- SELECTED VALUE --');
console.log(filteredStates[0]);

/**
 * Params: array element, value
 * Response: true/false
 * Description: Returns true/false given the comparison
 */
function getState(arrEl, val) {
    if (arrEl === val) {
      return true;
    } else {
      return false;
    }
}


// end program
