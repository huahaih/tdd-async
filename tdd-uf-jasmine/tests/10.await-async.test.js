import { login } from '../src/7.async';
// Async/Await
describe('Testing JavaScript Promises with Async/Await', () => {
  // Problem 1) write a positive test case by using async/await to call login() method with valid username
  it('should resolve if user is found', async () => {
    // Arrange
    let validUser = 'John Smith';

    // Act
    let result = await login(validUser);

    // Assert
    expect(result).toEqual('Successful');

    // Assert Alternate
    await expectAsync(login(validUser)).toBeResolved('Successful');
  });

  // Problem 2) write a nagitive test case by using async/await to call login() method with invalid username
  it('should reject if user is not found in system', async () => {
    // Arrange
    let invalidUser = 'Joe Anderson';

    // Act

    // Assert
    await expectAsync(login(invalidUser)).toBeRejectedWith('User Not Found');
  });
});
