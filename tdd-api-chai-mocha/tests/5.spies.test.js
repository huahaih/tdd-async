import chai from 'chai';
import spies from 'chai-spies';
import Hello from '../src/5.spies';

chai.use(spies);
// const should = chai.should();
const expect = chai.expect;

// Note: A spy is a good choice whenever the goal of a test is to verify something happened.

describe('Testing spying on a functions', () => {
  // Problem 1) write a test case to spy on the helloThere function
  //    Note: The helloThere function should not be called!
  // Part 2) write a test case to call helloThere to actually return a value

  it('should check that the helloThere function can be called', () => {
    let spy = chai.spy(Hello, 'helloThere');
    spy();
    expect(spy).to.have.been.called();
    spy.should.have.been.called();

    spy.calls.reset();
    expect(spy.calls.any()).toBe(false);
  });

  it('should check that the helloThere function returns a value', () => {
    let result = Hello.helloThere();
    expect(result).to.exist;
    expect(result).to.equal('hello there!');
  });

  // Problem 2) write a test case to spy on the helloWithName function
  //    Note: The helloWithName function should not be called!
  // Part 2) write a test case to call helloWithName to actually return a value
  /*
    it('should check that the helloWithName function can be called', () => {
      let fullName = { firstName: 'John', lastName: 'Smith' };
      let spy = chai.spyOn(Hello, 'helloWithName');
      spy(fullName);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(jasmine.objectContaining({ firstName: 'John', lastName: 'Smith' }));

      spy.calls.reset();
      expect(spy.calls.any()).toBe(false);
    });*/

  it('should check that the helloWithName function returns a value', () => {
    let fullName = { firstName: 'John', lastName: 'Smith' };
    let result = Hello.helloWithName(fullName);
    expect(result).to.exist;
    expect(result).to.equal('hello John Smith!');
  });
});
