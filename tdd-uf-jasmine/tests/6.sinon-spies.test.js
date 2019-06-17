import sinon from 'sinon';
import { createNewTransaction, GeneralBank } from '../src/6.sinon-spies-stubs-mocks';

// Spies offer information about a function without affecting their behaviour

describe('Testing spies', () => {
  let info;
  beforeEach(() => {
    info = { name: 'test' };
  });

  // Problem 1) write a test case to spy on the GeneralBank.debit function
  // Create a new function called 'createNewTransaction' that calls the GeneralBank.debit function
  // the createNewTransaction function accepts 2 parameters
  //  1 - info
  //  2 - empty function eg. () => {}
  // use sinon.spy to spy on the function first, then use sinon.assert to check the function
  // was called once

  it('should call debit once', () => {
    let debit = sinon.spy(GeneralBank, 'debit');
    createNewTransaction(info, () => { });
    debit.restore();
    sinon.assert.calledOnce(debit);
  });


  // Problem 2) write a test case to spy on a debit function, passing in the correct parameters

  it('should pass object with correct values to debit', () => {
    let debit = sinon.spy(GeneralBank, 'debit');
    let expectedUser = {
      name: info.name,
      accountType: 'chequing',
    };

    createNewTransaction(info, () => { });
    debit.restore();
    sinon.assert.calledWith(debit, expectedUser);
  });
});
