import { loginAndGetMessageFromServer } from '../src/7.async';
// callback
// test will complete as soon as loginAndGetMessageFromServer(), if done function is not there.
describe('Testing JavaScript callbacks', () => {
  test('should resolve if user is found', done => {
    let validUser = 'John Smith';
    let callback = messageFromServer => {
      expect(messageFromServer).toBe('Successful');
      done();
    };

    loginAndGetMessageFromServer(validUser, callback);
  });
});
