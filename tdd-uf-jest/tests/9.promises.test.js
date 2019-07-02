import { login } from '../src/7.async';

describe('Testing JavaScript Promises', () => {
  //  Async in JavaScript has 3 forms: callback, promise and await/async

  // Promises
  // NOTE: keyword return DOES matter, it won't execute if return is missing
  test('should resolve if user is in system', () => {
    // Arrange
    let validUser = 'John Smith';

    // Act

    // Assert
    return expect(login(validUser)).resolves.toBe('Successful');
  });

  test('should reject if user is not in system', () => {
    // Arrange
    let invalidUser = 'Joe Anderson';

    // Act

    // Assert
    return expect(login(invalidUser)).rejects.toMatch('User Not Found');
  });
});
