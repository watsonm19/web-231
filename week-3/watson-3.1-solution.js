/*
===============================================
; Title: Discussion Board 3.1 - Control Statements
; Author: Mark Watson
; Date: 4 November 2020
; Description: This program contains a function that will to count up to a specific number and log every integer to the console.
===============================================
*/

/*
  Expected output:

  // output from countUpTo() function
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10

  hint: the "(Number.isInteger(num) === true)" expression is correctly written
*/


// start program


/**
 * Params: number (a positive whole number)
 * Response: log every whole number from 1 to "num" - if not a number or a negative number, log error
 * Description: counts every number up to the argument number and logs it to console
 */
function countUpTo(num) {
  if (num < 1) {
      console.log('ERROR: number must be 1 or higher')
  } else if (Number.isInteger(num) === true) {
      for (i = 0; i < num; i++) {
          console.log(i + 1);
      }
  } else {
      console.log(`ERROR: "${num}" is not a whole number!`)
  }
}

countUpTo(10);

/*
** =========================================
**               Solution
** =========================================
// "if else" was a syntax error and needed to be changed to "else if" to correctly run the conditional statement.

// the "|" operator separating the for loop expressions was a syntax error and needed to be semicolons (;) in order for the program to recognize the statement.
** =========================================
*/


// end program
