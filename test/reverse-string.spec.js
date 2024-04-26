import reverseString from './reverse-string';

describe('reverseString', () => {
  test('should exist', () => {
    expect(reverseString).toBeDefined();
  });

  test('takes a string and returns it reversed', () => {
    expect(reverseString('foo')).toBe('oof');
    expect(reverseString('bar')).toBe('rab');
    expect(reverseString('baz')).toBe('zab');
  });

  test('should return an empty string if an empty string was given', () => {
    expect(reverseString('')).toBe('');
  });

  test('should return an empty string if a non-string value was given', () => {
    expect(reverseString(123)).toBe('');
  });
});
