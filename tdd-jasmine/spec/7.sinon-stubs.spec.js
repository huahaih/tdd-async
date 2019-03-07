import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies';

// Note: A few common uses for stubs
// - You can use them to replace problematic pieces of code
//    - such as network connection, database...etc
// - You can use them to trigger code paths that wouldn’t otherwise trigger – such as error handling
// - You can use them to help test asynchronous code more easily

describe('Testing stubs', () => {
  it('should pass object with correct values to save', () => {
    let save = sinon.stub(Database, 'save');
    let info = { name: 'test' };
    let expectedUser = {
      name: info.name,
      nameLowerCase: info.name.toLowerCase(),
    };

    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledWith(save, expectedUser);
  });

  it('should pass the error into the callback if save fails', () => {
    let expectedError = new Error('oops');
    let save = sinon.stub(Database, 'save');
    let info = { name: 'test' };
    save.throws(expectedError);
    let callback = sinon.spy();

    setupNewUser(info, callback);
    save.restore();
    sinon.assert.calledWith(callback, expectedError);
  });
});
