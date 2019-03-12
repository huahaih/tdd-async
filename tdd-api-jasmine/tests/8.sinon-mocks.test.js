import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies-stubs-mocks';

// Mocks are used to replace whole objects by using both spies and stubs

describe('Testing mocks', () => {
  // Problem 1) write a test case to mock the a whole Database class/object

  it('should pass object with correct values to save only once', () => {
    let database = sinon.mock(Database);
    let info = { name: 'test' };
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
