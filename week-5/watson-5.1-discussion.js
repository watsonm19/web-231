/*
================================================
; Title: Discussion 5.1 - Advanced Arrays
; Author: Mark Watson
; Date: 19 November 2020
; Description: This program intends to create a map with key => value pairs using a built function expression buildMap(). Then, utilizes a for..of loop to iterate through the map to print a concatenated string of the current key and value.

; ERROR: Currently contains 2 or more errors that are preventing the program from running.
================================================
*/

/*
  Expected output:

    Soccer scores goals
    Basketball scores points
    Tennis scores sets
    Football scores touchdowns

*/


// start program


// string arrays containing data - in need of pairing
const faveSports = ['Soccer', 'Basketball', 'Tennis', 'Football'];
const score = ['goals', 'points', 'sets', 'touchdowns'];

/**
 * Params: key array, value array
 * Response: create map and iterate through two (2) given arrays, inserting key/value pairs based on the current index number - return the entire value of the map
 * Description: combines two (2) arrays into one map and returns the value of the map
 */
const buildMap = (keyArr, valArr) => {
  const map = Map();
  for (let i = 0; i < keyArr.length; i++){
     map.set(keyArr[i], valArr[i]);
  };
  return map;
};

// variable - map from buildMap() function
const sportScores = buildMap(faveSports, score);

// iterates through map using for...of loop
for (let (key, value) of sportScores) {
  // output - concatenated string of containing current key/value pair from map
  console.log(key + ' scores ' + value);
}


// end program
