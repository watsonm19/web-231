/*
===============================================
; Title: Assignment 6.4 - Nested Object Literals
; Author: Professor Krasso
; Date: 25 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to create a nested object literal and output chosen properties within the object and its nested object.
===============================================
*/

/*
Expected output:

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today's date> and assigned to employee Bob Jones (Programmer I).
*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

// object with a five (5) total properties, including a nested object with four (4) properties
const ticket = {
  id: 105,
  name: 'Paystub request',
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: true,

  //nested object
  person: {
    id: 7077,
    firstName: 'Bob',
    lastName: 'Jones',
    jobTitle: 'Programmer I'
  }
}

// header output
console.log(header.display('Mark', 'Watson', 'Assignment 6.4'), '\n'); //new line

// output - concatenated string containing the values of chosen properties in the ticket object and its nested object
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' (' + ticket.person.jobTitle + ').');


// end program
