/* 
;========================================================
; Title: Discussion 1.1 - Values and Variables
; Author: Mark Watson
; Date: October 21, 2020
; Description: Basic JavaScript code with solutions to discussion 1.1
;========================================================
*/

var changeThisNumber = 99;

var changeThisNumber = 99;
var changeThisNumberMore = 51;
var makeThisNumberSmall = 200;

changeThisNumber++;
// This variable needed a lowercase 'c' like in the original call, rather than an uppercase.

changeThisNumberMore *= 2;
// The operators in this line were in reverse order '=*' which creates an error. To correct this, the arithmetic operator '*' needs to come before the assignment operator '='

makeThisNumberSmall = makeThisNumberSmall / 10;

console.log(changeThisNumber);
console.log(changeThisNumberMore);
console.log(makeThisNumberSmall);