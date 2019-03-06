
const createName = (first, last) => {
  let result = {};
  result.firstName = first;
  result.lastName = last;
  result.isEmployed = true;
  return result;
};

const createArray = (num) => {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }

  return array;
};

export { createName, createArray };
