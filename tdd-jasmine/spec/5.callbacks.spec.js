import Hello from '../src/5.callbacks';

describe('Testing spying on a functions', () => {
  let hello;
  let fullName;

  beforeAll(() => {
    hello = new Hello();
    fullName = { firstName: 'John', lastName: 'Smith' };
  });

  it('should test spy function', () => {
    hello.helloThere = jasmine.createSpy('hello there');
    hello.helloThere();
    expect(hello.helloThere).toHaveBeenCalled();
  });

  it('should test spy function with parameter', () => {
    hello.helloWithName = jasmine.createSpy('hello with name');
    hello.helloWithName(fullName);
    expect(hello.helloWithName).toHaveBeenCalled();
    expect(hello.helloWithName).toHaveBeenCalledWith(jasmine.objectContaining({ firstName: 'John', lastName: 'Smith' }));
  });
});
