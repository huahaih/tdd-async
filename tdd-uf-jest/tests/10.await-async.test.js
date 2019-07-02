import { login } from '../src/7.async';
// Async/Await
describe('Testing JavaScript Promises with Async/Await', () => {
  test('should resolve if user is found', async () => {
    // Arrange
    let validUser = 'John Smith';

    // Act

    // Assert
    await expect(login(validUser)).resolves.toBe('Successful');
  });

  test('should reject if user is not found in system', async () => {
    // Arrange
    let invalidUser = 'Joe Anderson';

    // Act

    // Assert
    await expect(login(invalidUser)).rejects.toMatch('User Not Found');
  });
});
