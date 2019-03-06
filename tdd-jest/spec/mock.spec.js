import forEach from '../src/mock';

test('mock testing', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // first argument of first call to function is 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // first argument of second call to function is 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // return value of first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  // return value of second call to the function was 43
  expect(mockCallback.mock.results[1].value).toBe(43);
});
