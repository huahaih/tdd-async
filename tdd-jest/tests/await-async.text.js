import { search } from '../src/async';



// Async/Await
describe('Testing JavaScript Promises with Async/Await', () => {

  // Requirement:
  //  John Smith --> successful
  //  Joe Smith --> user not found

  // Async-await

  // Problem 1) write a positive test case by using async/await to call login() method with valid username

  test('should resolve if user is in system', async () => {
    let user = 'John Smith';

    await expect(search(user)).resolves.toBe('successful');

    await search(user).then((result) => {
      expect(result).toEqual('successful');
    });
  });


  // Problem 2) write a negative test case by using async/await to call login() method with invalid username

  it('should not find user and return user not found', async () => {
    let user = 'Joe Smith';

    await search(user).catch((e) => {
      expect(e).toMatch('user not found');
    });

    await expect(search(user)).rejects.toMatch('user not found');
  });

});
