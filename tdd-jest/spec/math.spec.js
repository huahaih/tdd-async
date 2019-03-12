import { add, factorial } from '../src/math';


test('adds 2 and 5 to be 7', () => {
  let result = add(2, 5);
  expect(result).toBe(7);
});

test('adds 11 and 72 to be 83', () => {
  let result = add(11, 72);
  expect(result).toBe(83);
});

test('factorial of 1 is 1', () => {
  let result = factorial(1);
  expect(result).toBe(1);
});

test('should factorial of 5 is 120', () => {
  let result = factorial(5);
  expect(result).toBe(120);
});

test('should factorial of 1 for 1', () => {
  let result = factorial(0);
  expect(result).toBe(1);
});
