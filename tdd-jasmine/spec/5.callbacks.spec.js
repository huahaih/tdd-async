

describe('Testing spying on a function and functions', () => {
  it('should test a spy call', () => {
    let genericFunction = jasmine.createSpy('genericFunction');
    genericFunction({ foo: 'bar' });
    expect(genericFunction).toHaveBeenCalledWith(jasmine.objectContaining({
      foo: 'bar',
    }));
  });
});
