import { calculator } from './calculator';

test('Add', () => {
  expect(calculator.add(12, 4)).toBe(16);
});

test('Add decimals', () => {
  expect(calculator.add(12.3, 4.1)).toBeCloseTo(16.4);
});

test('Subtract', () => {
  expect(calculator.subtract(12, 4)).toBe(8);
});

test('Subtract decimals', () => {
  expect(calculator.subtract(12.3, 4.1)).toBeCloseTo(8.2);
});

test('Multiply', () => {
  expect(calculator.multiply(12, 4)).toBe(48);
});

test('Multiply decimals', () => {
  expect(calculator.multiply(12.3, 4.1)).toBeCloseTo(50.43);
});

test('Divide', () => {
  expect(calculator.divide(12, 4)).toBe(3);
});

test('Divide decimals', () => {
  expect(calculator.divide(12.3, 4.1)).toBeCloseTo(3);
});

test('Divide decimals, complicated', () => {
  expect(calculator.divide(1345634.3123, 41563.1029)).toBeCloseTo(32.37569427);
});
