import createName from '../src/3.objects';

describe('Testing objects, defined, nulls', () => {
  // Problem 1) write a test case that accepts a firstName and a lastName as parameters and returns
  // a JSON structure with those attributes
  // the function should be called 'createName'
  // the testcases should test 3 things
  //  1 - both firstName and lastName are defined, eg. they exist
  //  2 - firstName is equal to John and lastName is equal to Smith
  //  3 - the JSON structure contains only the firstName and lastName attributes

  it('should create a JSON structure with first a firstName of "John" and a lastName of "Smith"', () => {
    let result = createName('John', 'Smith');
    let answer = { firstName: 'John', lastName: 'Smith' };

    expect(result.firstName).toBeDefined();
    expect(result.lastName).toBeDefined();
    expect(result.firstName).toBe('John');
    expect(result.lastName).toEqual('Smith');

    // this ensures the JSON structure returning doesn't contain extra attributes
    expect(result).toEqual(answer);
  });
});
