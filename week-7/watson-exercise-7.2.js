/*
===============================================
; Title: Exercise 7.2 - Constructor Functions
; Author: Professor Krasso
; Date: 2 December 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to use constructor functions to create an array of objects
===============================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');

/**
 * Params: id number, first name, last name, title
 * Response: void - constructor function
 * Description: creates object with four (4) properties - id, firstName, lastName, title
 */
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// array of five (5) employees using the Employee constructor function
const employees = [
  new Employee(1, 'Thomas', 'Edison', 'Software Engineer'),
  new Employee(2, 'Benjamin', 'Franklin', 'Programmer'),
  new Employee(3, 'Nikola', 'Tesla', 'Project Manager'),
  new Employee(4, 'Charles', 'Babbage', 'Product Manager'),
  new Employee(5, 'Alexander', 'Bell', 'Business Analyst'),
]

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 7.2'), '\n'); //new line

// output - loops over employees array and prints each value within the constructed object elements using the property names
for (let i = 0; i < employees.length; i++) {
  console.log(`${employees[i].id} ${employees[i].firstName} ${employees[i].lastName} ${employees[i].title}`)
}


// end program
