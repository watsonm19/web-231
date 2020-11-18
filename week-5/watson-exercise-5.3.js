/*
================================================
; Title: Exercise 5.3 - Object Collections
; Author: Professor Krasso
; Date: 18 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to use the forEach() method to iterate through an array of objects and print specific values within the objects based on the desired outcome.
================================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/


// start program


// imports watson-header.js for use
const header = require('../watson-header');
// an array of objects containing data on famous composers
const composers = [
  {
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8
  },
  {
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10
  },
  {
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9
  },{
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5
  }
];

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 5.3'), '\n'); //new line

// title output
console.log('-- COMPOSERS --');
// output - iterates through composers array using the forEach() method. Then, prints values to the console using the object names of each desired value called within the string template literal
composers.forEach(composer => {
  console.log(`Last Name: ${composer.lastName}, Genre: ${composer.genre}, Rating: ${composer.rating}`);
})


// end program
