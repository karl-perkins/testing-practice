import capitalize from './capitalize';

describe('capitalize', () => {
  test('should exist', () => {
    expect(capitalize).toBeDefined();
  });

  test('should take a string and return it with the first character capitalized', () => {
    expect(capitalize('foo')).toBe('Foo');
    expect(capitalize('bar')).toBe('Bar');
    expect(capitalize('baz')).toBe('Baz');
  });

  test('should return an empty string if an empty string was given', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return an empty string if a non-string value was given', () => {
    expect(capitalize(123)).toBe('');
  });
});
