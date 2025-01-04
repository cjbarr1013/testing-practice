import { reverseString } from './reverseString';

test('single word', () => {
  expect(reverseString('John')).toBe('nhoJ');
});

test('multiple words', () => {
  expect(reverseString('John Smith')).toBe('htimS nhoJ');
});

test('includes numbers and/or characters', () => {
  expect(reverseString('9fn 50,@ N%`)')).toBe(')`%N @,05 nf9');
});
