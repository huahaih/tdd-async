import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies-stubs-mocks';

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

  // Problem 1) write a stub to the Database save (using sinon.stub)

  it('should pass object with correct values to save', () => {
    let save = sinon.stub(Database, 'save');
    let expectedUser = {
      name: info.name,
      status: 'active',
    };

    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledWith(save, expectedUser);
  });


  // Problem 2) write a stub to the Database save (using sinon.stub) that throws an error

  it('should pass the error into the callback if save fails', () => {
    let save = sinon.stub(Database, 'save');
    let expectedError = new Error('oops');

    save.throws(expectedError);
    let callback = sinon.spy();

    setupNewUser(info, callback);
    save.restore();
    sinon.assert.calledWith(callback, expectedError);
  });


  // Problem 3) write a stub to the Database save (using sinon.stub)
  // using 'yields' to an asynchronous call, making it synchronous

  it('should pass the database result into the callback', () => {
    let save = sinon.stub(Database, 'save');
    let expectedResult = { success: true };

    save.yields(null, expectedResult);
    let callback = sinon.spy();

    setupNewUser(info, callback);
    save.restore();
    sinon.assert.calledWith(callback, null, expectedResult);
  });
});
