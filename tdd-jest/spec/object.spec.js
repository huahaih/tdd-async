import { createName, createArray } from '../src/object';


test('create a json object with firstName of John and lastName of Smith', () => {
  let result = createName('John', 'Smith');
  expect(result.firstName).toBeDefined();
  expect(result.lastName).toBeDefined();
  expect(result.isEmployed).toBe(true);
  expect(result.firstName).toBe('John');
  expect(result.lastName).toEqual('Smith');
});


test('get first 5 elements of array to be [1, 2, 3, 4, 5]', () => {
  let result = createArray(5);
  let answer = [1, 2, 3, 4, 5];

  expect(result).toEqual(answer);
});
