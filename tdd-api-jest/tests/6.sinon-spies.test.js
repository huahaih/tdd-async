import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies-stubs-mocks';

// Spies offer information about a function without affecting their behaviour

describe('Testing spies', () => {
  let info;
  beforeEach(() => {
    info = { name: 'test' };
  });

  // Problem 1) write a test case to spy on the Database.save function
  // Create a new function called 'setupNewUser' that calls the Database.save function
  // the setupNewUser function accepts 2 parameters
  //  1 - info
  //  2 - empty function eg. () => {}
  // use sinon.spy to spy on the function first, then use sinon.assert to check the function
  // was called once

  it('should call save once', () => {
    let save = sinon.spy(Database, 'save');
    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledOnce(save);
  });


  // Problem 2) write a test case to spy on a save function, passing in the correct parameters

  it('should pass object with correct values to save', () => {
    let save = sinon.spy(Database, 'save');
    let expectedUser = {
      name: info.name,
      status: 'active',
    };

    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledWith(save, expectedUser);
  });
});
