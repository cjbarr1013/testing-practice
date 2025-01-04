import { analyzeArray } from './analyzeArray';

// Integers
test('Integers average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Integers minimum', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Integers maximum', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Integers length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('Correct object returned', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

// Decimals
test('Decimals average', () => {
  expect(analyzeArray([1.3, 8.8, 3.5, 4.89, 2.134, 6.43]).average).toBeCloseTo(
    4.509
  );
});

test('Decimals minimum', () => {
  expect(analyzeArray([1.3, 8.8, 3.5, 4.89, 2.134, 6.43]).min).toBe(1.3);
});

test('Decimals maximum', () => {
  expect(analyzeArray([1.3, 8.8, 3.5, 4.89, 2.134, 6.43]).max).toBe(8.8);
});

test('Decimals length', () => {
  expect(analyzeArray([1.3, 8.8, 3.5, 4.89, 2.134, 6.43]).length).toBe(6);
});

// Negtive values
test('Negative values included average', () => {
  expect(
    analyzeArray([-1.3, 8.8, -3.5, 4.89, -2.134, 6.43]).average
  ).toBeCloseTo(2.1977);
});

test('Negative values included minimum', () => {
  expect(analyzeArray([-1.3, 8.8, -3.5, 4.89, -2.134, 6.43]).min).toBe(-3.5);
});

test('Negative values included maximum', () => {
  expect(analyzeArray([-1.3, 8.8, -3.5, 4.89, -2.134, 6.43]).max).toBe(8.8);
});

test('Negative values included length', () => {
  expect(analyzeArray([-1.3, 8.8, -3.5, 4.89, -2.134, 6.43]).length).toBe(6);
});
