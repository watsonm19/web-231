/*
================================================
; Title: Assignment 5.4 - Filtering/Reducing Complex Data Structures
; Author: Professor Krasso
; Date: 18 November 2020
; Modified By: Mark Watson
; Description: This program demonstrates the use of the map() method to create filtered arrays. Then, iterates through and prints the values of the filtered array in concatenated strings based on the desired output below.
================================================
*/

/*
Expected output:

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
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
// an array of 2-element arrays [lastName, rating] for each composer - uses map() method on composers array from above
const composerRatings = composers.map(composer => {
  return [composer.lastName, composer.rating];
})
// an array of 2-element arrays [lastName, genre] for each composer - uses map() method on composers array from above
const composerGenres = composers.map(comp => {
  return [comp.lastName, comp.genre];
})

// header output
console.log(header.display('Mark', 'Watson,', 'Assignment 5.4'), '\n'); //new line

// title output
console.log('-- COMPOSER BY RATING --');
// iterates through composerRatings array
composerRatings.forEach(array => {
  // output - prints the value of rating in the current array [lastName, rating]
  console.log('Rating: ' + array[1]);
  // output - prints the value of lastName in the current array [lastName, rating]
  console.log('Composer: ' + array[0], '\n'); //new line
})

//title output
console.log('-- COMPOSER BY GENRE --');
// iterates through composerGenres array
composerGenres.forEach(arr => {
  // output - prints the value of genre in the current array [lastName, genre]
  console.log('Genre: ' + arr[1]);
  // output - prints the value of lastName in the current array [lastName, genre]
  console.log('Composer: ' + arr[0], '\n'); //new line
})


// end program

// for (let [name, rating] of composerRatings) {
//   console.log('Rating: ' + rating);
//   console.log('Composer: ' + name + '\n');
// }
