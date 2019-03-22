import { expect } from 'chai';
import storeDate from '../src/4.exceptions';

describe('Testing exceptions', () => {
  // Problem 1) create a 'storeDate' function that returns successful if the date passed to it is
  // in the past.  Otherwise, throw and exception if the date is in the future

  it('should successfully add a date in the past', () => {
    let currentDate = new Date();
    let result = storeDate(currentDate);
    expect(result).to.equal('successful');
  });

  it('should throw an exception when adding a date 7 days in the future', () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    expect(() => { storeDate(currentDate); }).to.throw(Error);
  });
});
