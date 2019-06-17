import sinon from 'sinon';
import { createNewTransaction, GeneralBank } from '../src/6.sinon-spies-stubs-mocks';

// Mocks are used to replace whole objects by using both spies and stubs

describe('Testing mocks', () => {
  let info;

  beforeEach(() => {
    info = { name: 'test' };
  });

  // Problem 1) write a test case to mock the a whole GeneralBank class/object
  // use the stubbed variable to call 'debit' with the expected input that is normally
  // passed to the debit function of the GeneralBank, eg. user
  // call the 'createNewTransaction' function with the following parameters:
  //  1 - info
  //  2 - empty function eg. () => {}

  it('should pass object with correct values to debit only once', () => {
    let generalBank = sinon.mock(GeneralBank);
    let expectedUser = {
      name: info.name,
      accountType: 'chequing',
    };

    generalBank.expects('debit').once().withArgs(expectedUser);
    createNewTransaction(info, () => { });

    generalBank.verify();
    generalBank.restore();
  });
});
