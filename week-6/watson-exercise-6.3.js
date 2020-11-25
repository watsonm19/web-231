/*
===============================================
; Title: Exercise 6.3 - Object Literals
; Author: Professor Krasso
; Date: 25 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to create an object and output its properties.
===============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

// test object with three (3) properties
const ticket = {
  id: 101,
  name: 'Help Desk Support',
  requestor: 'Bob Jones'
}

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 6.3'), '\n'); //new line

// output - concatenated string containing the values of each property in the test object
console.log(`{id: ${ticket.id}, name: ${ticket.name}, requestor: ${ticket.requestor}}`);


// end program
