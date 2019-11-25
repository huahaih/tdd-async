import { search } from '../src/async';

describe('Testing JavaScript Promises', () => {
  //  Async in JavaScript has 3 forms: callback, promise and await/async

  // Promises
  // NOTE: keyword return DOES matter, it won't execute if return is missing
  // Problem 1) write a positive test case to call login() method with valid usernam
  test('should resolve if user is in system', () => {
    // Arrange
    let validUser = 'John Smith';

    // Act

    // Assert
    return expect(search(validUser)).resolves.toBe('Successful');
  });

  // Problem 2) write a nagitive test case to call login() method with invalid username
  test('should reject if user is not in system', () => {
    // Arrange
    let invalidUser = 'Joe Anderson';

    // Act

    // Assert
    return expect(search(invalidUser)).rejects.toBe('User Not Found');
  });
});
