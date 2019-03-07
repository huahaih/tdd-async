import Hello from '../src/5.spies';

// Note: A spy is a good choice whenever the goal of a test is to verify something happened.

describe('Testing spying on a functions', () => {
  let hello;
  let fullName;

  beforeAll(() => {
    hello = new Hello();
    fullName = { firstName: 'John', lastName: 'Smith' };
  });

  // Problem 1) write a test case to test that a function has been called

  it('should test spy function', () => {
    hello.helloThere = jasmine.createSpy('hello there');
    hello.helloThere();
    expect(hello.helloThere).toHaveBeenCalled();
  });


  // Problem 2) write a test case to test that a function has been called with a parameter

  it('should test spy function with parameter', () => {
    hello.helloWithName = jasmine.createSpy('hello with name');
    hello.helloWithName(fullName);
    expect(hello.helloWithName).toHaveBeenCalled();
    expect(hello.helloWithName).toHaveBeenCalledWith(jasmine.objectContaining({ firstName: 'John', lastName: 'Smith' }));
  });
});
