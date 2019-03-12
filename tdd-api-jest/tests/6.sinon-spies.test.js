import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies-stubs-mocks';

// Spies offer information about a function without affecting their behaviour

describe('Testing spies', () => {
  let info;
  beforeEach(() => {
    info = { name: 'test' };
  });

  // Problem 1) write a test case to spy on a save function

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
