import analyzeArray from '../src/analyzeArray';

describe('analyzeArray', () => {
  test('should exist', () => {
    expect(analyzeArray).toBeDefined();
  });

  test('should have properties', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object.average).toBeDefined();
    expect(object.min).toBeDefined();
    expect(object.max).toBeDefined();
    expect(object.length).toBeDefined();
  });

  test('takes an array of numbers and returns the average', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    expect(analyzeArray([5, 10, 15, 20, 25]).average).toBe(15);
    expect(analyzeArray([-2, 0, 2, 4, 6, 8]).average).toBe(3);
  });

  test('takes an array of numbers and returns the minimum value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    expect(analyzeArray([5, 10, 15, 20, 25]).min).toBe(5);
    expect(analyzeArray([-2, 0, 2, 4, 6, 8]).min).toBe(-2);
  });

  test('takes an array of numbers and returns the maximum value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    expect(analyzeArray([5, 10, 15, 20, 25]).max).toBe(25);
    expect(analyzeArray([-2, 0, 2, 4, 6, 8]).max).toBe(8);
  });

  test('takes an array of numbers and returns the maximum value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    expect(analyzeArray([5, 10, 15]).length).toBe(3);
    expect(analyzeArray([]).length).toBe(0);
  });
});
