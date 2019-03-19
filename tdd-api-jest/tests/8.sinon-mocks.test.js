import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies-stubs-mocks';

// Mocks are used to replace whole objects by using both spies and stubs

describe('Testing mocks', () => {
  let info;

  beforeEach(() => {
    info = { name: 'test' };
  });

  // Problem 1) write a test case to mock the a whole Database class/object
  // use the stubbed variable to call 'save' with the expected input that is normally
  // passed to the save function of the Database, eg. user
  // call the 'setupNewUser' function with the following parameters:
  //  1 - info
  //  2 - empty function eg. () => {}

  it('should pass object with correct values to save only once', () => {
    let database = sinon.mock(Database);
    let expectedUser = {
      name: info.name,
      status: 'active',
    };

    database.expects('save').once().withArgs(expectedUser);
    setupNewUser(info, () => { });

    database.verify();
    database.restore();
  });
});
