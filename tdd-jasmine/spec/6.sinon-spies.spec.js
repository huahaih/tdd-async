import sinon from 'sinon';
import { setupNewUser, Database } from '../src/6.sinon-spies';


describe('Testing spies', () => {
  let info;
  beforeEach(() => {
    info = { name: 'test' };
  });

  it('should call save once', () => {
    let save = sinon.spy(Database, 'save');
    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledOnce(save);
  });

  it('should pass object with correct values to save', () => {
    let save = sinon.spy(Database, 'save');
    let expectedUser = {
      name: info.name,
      nameLowerCase: info.name.toLowerCase(),
    };

    setupNewUser(info, () => { });
    save.restore();
    sinon.assert.calledWith(save, expectedUser);
  });
});
