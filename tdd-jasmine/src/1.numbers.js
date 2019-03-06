// NOTE: all syntax need to be written in modern javascript

// Problem 1) write a bunch of test cases to test an 'add' function that adds 2 numbers
//  The 'add' function should accept 2 integers, positive and negatives 

const add = (a, b) => {
  return a + b;
};


// Problem 2) write a bunch of test cases to test a function that creates an array
// Given integer inputs of start and end, the array must include both numbers

const createArray = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
};


// Problem 3) write a bunch of test cases to check a limit of a number
// eg. if a value should be between 0 and 123

const newbornAge = () => {
  return 0;
};

const oldestHumanAge = () => {
  return 122;
};

// export all your functions here

export { add, createArray, newbornAge, oldestHumanAge };
