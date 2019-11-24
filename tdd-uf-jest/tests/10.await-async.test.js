import { login } from '../src/7.async';
// Async/Await
describe('Testing JavaScript Promises with Async/Await', () => {
  // Problem 1) write a positive test case by using async/await to call login() method with valid username
  test('should resolve if user is found', async () => {
    // Arrange
    let validUser = 'John Smith';

    // Act


    /* Assert -- TRADITION STYLE
    let result = await login(validUser);
    expect(result).toEqual('Successful');
    */

    // Assert - NEW STYLE
    await expect(login(validUser)).resolves.toBe('Successful');
  });

  // Problem 2) write a nagitive test case by using async/await to call login() method with invalid username
  test('should reject if user is not found in system', async () => {
    // Arrange
    let invalidUser = 'Joe Anderson';

    // Act


    // Assert
    await expect(login(invalidUser)).rejects.toBe('User Not Found');
  });
});
