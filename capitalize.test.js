
const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns an empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('throws an error for non-string input', () => {
    expect(() => capitalize(123)).toThrow('Input should be a string');
  });
});
