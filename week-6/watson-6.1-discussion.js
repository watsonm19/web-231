/*
===============================================
; Title: Discussion 6.1 - Objects and Built-In Objects
; Author: Mark Watson
; Date: 26 November 2020
; Modified By:
; Description: This program uses object getters and setters to change object properties and outputs the old and new values.
; PROBLEM: Contains 2 or more errors that need to be corrected to get the expected output below.
===============================================
*/

/*
Expected Output:

    --- ORIGINAL OUTPUT ---
    This user is The_Letter_O and their name is Damian Lamonte, 29 years old. Occupation: Basketball Player.

    --- CORRECTED OUTPUT ---
    This user is The_Letter_O and their name is Damian Lillard, 30 years old. Occupation: Basketball Player.

*/


//start program


let user = {
    fullName: 'Damian Lamonte',
    username: 'The_Letter_O',
    password: 'dametime0',
    age: 29,
    occupation: {
        name: 'Basketball Player',
        position: 'Point Guard',
        company: 'Portland Trail Blazers',
        yearsWorked: 8
    },

    get nameAge() {
        `${this.fullName}, ${this.age} years old`
    },

    set name() {
        this.fullName = newFullName;
    },

    set addYears(num) {
        this.age = this.age + num;
    }
}

console.log('--- ORIGINAL OUTPUT ---');
console.log(`This user is ${user.username} and their name is ${user.nameAge}. Occupation: ${user.occupation}.`, '\n');

user.name = 'Damian Lillard';
user.addYears = 1;

console.log('--- CORRECTED OUTPUT ---');
console.log(`This user is ${user.username} and their name is ${user.nameAge}. Occupation: ${user.occupation}.`);


// end program
