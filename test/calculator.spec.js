import Calculator from '../src/calculator';
const calculator = new Calculator();

describe('add', () => {
  test('should exist', () => {
    expect(calculator.add).toBeDefined();
  });

  test('should take two numbers and return the correct calculation', () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(3, 3)).toBe(6);
  });
});

describe('subtract', () => {
  test('should exist', () => {
    expect(calculator.subtract).toBeDefined();
  });

  test('should take two numbers and return the correct calculation', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.subtract(4, 3)).toBe(1);
  });
});

describe('divide', () => {
  test('should exist', () => {
    expect(calculator.divide).toBeDefined();
  });

  test('should take two numbers and return the correct calculation', () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(8, 2)).toBe(4);
  });
});

describe('multiply', () => {
  test('should exist', () => {
    expect(calculator.multiply).toBeDefined();
  });

  test('should take two numbers and return the correct calculation', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(3, 3)).toBe(9);
    expect(calculator.multiply(4, 4)).toBe(16);
  });
});
