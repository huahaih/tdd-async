import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies';


describe('Testing spies', () => {
  it('should call save once', () => {
    let save = sinon.spy(Database, 'save');
    let info = { name: 'test' };
    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledOnce(save);
  });

  it('should pass object with correct values to save', () => {
    let save = sinon.spy(Database, 'save');
    let info = { name: 'test' };
    let expectedUser = {
      name: info.name,
      nameLowerCase: info.name.toLowerCase(),
    };

    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledWith(save, expectedUser);
  });
});
