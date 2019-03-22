import { expect } from 'chai';
import { multipleOfThree, isAnInteger } from '../src/2.truthy';

describe('Testing truthiness', () => {
  // Problem 1) write a bunch of test cases that tests whether a number is a multiple of 3
  // the function 'multipleOfThree' must check to see if the given input integer is evenly
  // divisible by 3

  it('should find that 72 is not a multiple of 3', () => {
    let result = multipleOfThree(72);
    expect(result).to.be.true;
  });

  it('should find that 5 is not a multiple of 3', () => {
    let result = multipleOfThree(5);
    expect(result).to.be.false;
  });


  // Problem 2) write a bunch of test cases to test whether a given string input is an integer
  // The function 'isAnInteger' should return true if the string input is an integer, otherwise
  // it should return false

  it('should find that "57" is an integer', () => {
    let result = isAnInteger('57');
    expect(result).to.be.true;
  });

  it('should find that "a" is not an integer', () => {
    let result = isAnInteger('a');
    expect(result).to.be.false;
  });
});
