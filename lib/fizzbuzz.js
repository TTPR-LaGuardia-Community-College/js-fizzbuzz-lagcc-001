'use strict';

let fizzbuzz = function(num){
	// Write your code here
	let currentElement = 0;
	if (num % 5 == 0 && num % 3 == 0) {
		currentElement = "FizzBuzz";
	} else if (num % 5 == 0){
		currentElement = "Buzz"
	} else if (num % 3 == 0){
		currentElement = "Fizz"
	} else {
		currentElement = num
	};
	return currentElement;

	};

module.exports = fizzbuzz; 