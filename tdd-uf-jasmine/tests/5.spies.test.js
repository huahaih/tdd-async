import Hello from '../src/5.spies';

// Note 1: A spy is a good choice whenever the goal of a test is to verify something happened.
// Note 2: This exercise is using Jasmine spies, whereas exercises 6-8 are using Sinon spies.
//         The two libraries have different syntax and behavior. For instance, Jasmine spies do NOT
//         forward calls to the original methods by default, whereas Sinon spies do. The behavior
//         of Jasmine spies can be changed by called (and.callThrough()) on the spy created using
//         spyOn().

const fullName = { firstName: 'John', lastName: 'Smith' };

describe('Testing spying on a functions', () => {

  // Problem 1) write a test case to check that getFullNameString returns the full name string

  it('should check that getFullNameString returns the full name string', () => {
    const result = Hello.getFullNameString(fullName);
    expect(result).toBe('John Smith');
  });

  // Problem 2) write a test case to check that helloThere calls getFullNameString:
  // 1 - spyOn the getFullNameString function and capture the returned spy function
  // 2 - call the helloThere function directly
  // 3 - verify the spy has been called with the fullName object and only ONCE
  // 4 - reset calls on the spy
  // 5 - verify the spy does not have any calls (because of the reset)
  // 6 - look at the logs of running the test

  it('should check that helloThere calls getFullNameString', () => {
      let spy = spyOn(Hello, 'getFullNameString');

      Hello.helloThere(fullName);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({ firstName: 'John', lastName: 'Smith' }));
      expect(spy.calls.count()).toBe(1);

      spy.calls.reset();
      expect(spy.calls.any()).toBe(false);
  });

  // Problem 3) write a test case to check that helloThere calls getFullNameString and uses its return value properly:
  // 1 - spyOn the getFullNameString function and capture the returned spy function
  // 2 - call the helloThere function and verify its return value is 'hello there (undefined)!'
  // 3 - make the spy forward calls to the original function (.and.callThrough())
  // 4 - call the helloThere function again and verify its return value is 'hello there (John Smith)!'
  // 5 - look at the logs of running the test

  it('should check that the spy forwards calls when its configured to do so', () => {
    let spy = spyOn(Hello, 'getFullNameString');

    let result = Hello.helloThere(fullName);
    expect(result).toBe('hello there (undefined)!');

    spy = spy.and.callThrough();

    result = Hello.helloThere(fullName);
    expect(result).toBe('hello there (John Smith)!');
  });
});
