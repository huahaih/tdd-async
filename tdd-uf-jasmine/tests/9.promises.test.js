import { login } from '../src/7.async';

describe('Testing JavaScript Promises', () => {
  //  Async in JavaScript has 3 forms: callback, promise and await/async

  // Promises
  // NOTE: keyword return DOES matter, it won't execute if return is missing
  // Problem 1) write a positive test case to call login() method with valid usernam
  it('should resolve if user is in system', () => {
    // Arrange
    let validUser = 'John Smith';

    // Act

    // Assert
    login(validUser).then((result) => {
      expect(result).toEqual('Successful');
    });

  });

  // Problem 2) write a nagitive test case to call login() method with invalid username
  it('should reject if user is not in system', () => {
    // Arrange
    let invalidUser = 'Joe Anderson';

    // Act

    // Assert
    login(invalidUser).then((result) => {
      expect(result).toEqual('User Not Found');
    });
  });
});
