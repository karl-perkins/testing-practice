import caesarCipher from '../src/caesarCipher';

describe('caesarCipher', () => {
  test('should exist', () => {
    expect(caesarCipher).toBeDefined();
  });

  test('should take a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('foo', 1)).toBe('gpp');
    expect(caesarCipher('bar', 2)).toBe('dct');
    expect(caesarCipher('baz', 3)).toBe('ed,');
  });

  test('should wrap', () => {
    expect(caesarCipher('xyz', 3)).toBe(' .,');
  });

  test('should keep same case', () => {
    expect(caesarCipher('FOO', 1)).toBe('GPP');
    expect(caesarCipher('BAR', 2)).toBe('DCT');
    expect(caesarCipher('BAZ', 3)).toBe('ED,');
  });

  test('should work with punctuation', () => {
    expect(caesarCipher(' .,?!', 3)).toBe('?!ABC');
  });
});
