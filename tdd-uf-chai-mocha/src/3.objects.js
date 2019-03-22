
// Problem 1) write a test case that accepts a firstName and a lastName as parameters and returns
// a JSON structure with those attributes
// the function should be called 'createName'

const createName = (firstName, lastName) => {
  let result = {};
  result.firstName = firstName;
  result.lastName = lastName;
  return result;
};

export default createName;
