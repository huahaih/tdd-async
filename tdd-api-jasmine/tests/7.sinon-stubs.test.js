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
  // Create a new function called 'setupNewUser' that calls the Database.save function
  // the setupNewUser function accepts 2 parameters
  //  1 - info
  //  2 - empty function eg. () => {}
  // use sinon.stub to stub out the save function first, then use sinon.assert to check the
  // save function is "called"

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


  // Problem 2) Continuing from 1), force the Database to throw an error
  // the error should be returned in the 'callback' which is the 2nd paramter of
  // the setupNewUser function
  // set up a spy on the callback function before passing it as a param of setupNewUser
  // use sinon.assert that the callback came back with the error

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
