import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies';

describe('Testing mocks', () => {
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
