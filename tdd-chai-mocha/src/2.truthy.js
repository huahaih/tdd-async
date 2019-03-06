// NOTE: all syntax need to be written in modern javascript


// Problem 1) write a bunch of test cases that tests whether a number is a multiple of 3
// the function 'multipleOfThree' must check to see if the given input integer is evenly
// divisible by 3

const multipleOfThree = num => (num % 3) === 0;


// Problem 2) write a bunch of test cases to test whether a given string input is an integer
// The function 'isAnInteger' should return true if the string input is an integer, otherwise
// it should return false

const isAnInteger = literal => !isNaN(literal);

export { multipleOfThree, isAnInteger };
