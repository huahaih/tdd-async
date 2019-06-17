import sinon from 'sinon';
import { createNewTransaction, GeneralBank } from '../src/6.sinon-spies-stubs-mocks';

// Note: A few common uses for stubs
// - You can use them to replace problematic pieces of code
//    - such as network connection, database...etc
// - You can use them to trigger code paths that wouldn’t otherwise trigger – such as error handling
// - You can use them to help test asynchronous code more easily

describe('Testing stubs', () => {
  let info;

  beforeEach(() => {
    info = { name: 'test' };
  });

  // Problem 1) write a stub to the GeneralBank debit (using sinon.stub)
  // Create a new function called 'setupNewUser' that calls the GeneralBank.debit function
  // the setupNewUser function accepts 2 parameters
  //  1 - info
  //  2 - empty function eg. () => {}
  // use sinon.stub to stub out the debit function first, then use sinon.assert to check the
  // debit function is "called"

  it('should pass object with correct values to debit', () => {
    let debit = sinon.stub(GeneralBank, 'debit');
    let expectedUser = {
      name: info.name,
      accountType: 'chequing',
    };

    createNewTransaction(info, () => { });
    debit.restore();
    sinon.assert.calledWith(debit, expectedUser);
  });


  // Problem 2) Continuing from 1), force the GeneralBank to throw an error
  // the error should be returned in the 'callback' which is the 2nd paramter of
  // the setupNewUser function
  // set up a spy on the callback function before passing it as a param of setupNewUser
  // use sinon.assert that the callback came back with the error

  it('should pass the error into the callback if debit fails', () => {
    let debit = sinon.stub(GeneralBank, 'debit');
    let expectedError = new Error('oops');

    debit.throws(expectedError);
    let callback = sinon.spy();

    createNewTransaction(info, callback);
    debit.restore();
    sinon.assert.calledWith(callback, expectedError);
  });


  // Problem 3) write a stub to the GeneralBank debit (using sinon.stub)
  // using 'yields' to an asynchronous call, making it synchronous

  it('should pass the GeneralBank result into the callback', () => {
    let debit = sinon.stub(GeneralBank, 'debit');
    let expectedResult = { success: true };

    debit.yields(null, expectedResult);
    let callback = sinon.spy();

    createNewTransaction(info, callback);
    debit.restore();
    sinon.assert.calledWith(callback, null, expectedResult);
  });
});
