import { expect } from 'chai';
import { add, createArray, newbornAge, oldestHumanAge } from '../src/1.numbers';

describe('Testing numbers and equalities', () => {
  // Problem 1) write a bunch of test cases to test an 'add' function that adds 2 numbers
  // The 'add' function should accept 2 integers, positive and negatives

  it('should add 2 and 3 to be 5', () => {
    let result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should add 11 and 52 to be 63', () => {
    let result = add(11, 52);
    expect(result).to.equal(63);
  });

  it('should add -5 and 4 to be -1', () => {
    let result = add(-5, 4);
    expect(result).to.equal(-1);
  });


  // Problem 2) write a bunch of test cases to test a function that creates an array
  // Given integer inputs of start and end, the array must include both numbers

  it('should create an array containing elements 1 thru 7, given 1 and 7', () => {
    let result = createArray(1, 7);
    let answer = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < result.length; i++) {
      expect(result[i]).to.equal(i + 1);
    }

    expect(result).to.deep.equal(answer);
  });

  it('should create an array containing elements -3 thru 4, give -3 and 4', () => {
    let result = createArray(-3, 4);
    let answer = [-3, -2, -1, 0, 1, 2, 3, 4];

    for (let i = 0; i < result.length; i++) {
      expect(result[i]).to.equal(answer[i]);
    }

    expect(result).to.deep.equal(answer);
  });


  // Problem 3) write a bunch of test cases to check a limit of a number
  // eg. if a value should be between 0 and 123

  it('should check age to be greater 0 and less than 123', () => {
    let youngest = newbornAge();
    let oldest = oldestHumanAge();
    expect(youngest).to.be.above(-1);
    expect(oldest).to.be.below(123);
  });
});
