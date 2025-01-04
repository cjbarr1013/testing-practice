import { caesarCipher } from './caesarCipher';

test('One word', () => {
  expect(caesarCipher('cheese', 2)).toBe('ejggug');
});

test('Two words', () => {
  expect(caesarCipher('string cheese', 2)).toBe('uvtkpi ejggug');
});

test('Z to A wrapping', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Case preservation', () => {
  expect(caesarCipher('John McDavid', 7)).toBe('Qvou TjKhcpk');
});

test('Punctuation', () => {
  expect(caesarCipher('Hello, John McDavid!', 7)).toBe('Olssv, Qvou TjKhcpk!');
});

test('Non-characters in string', () => {
  expect(caesarCipher('8dnvir 9fne0', 7)).toBe('8kucpy 9mul0');
});

test('Shift is equal 0', () => {
  expect(caesarCipher('string cheese', 0)).toBe('string cheese');
});

test('Shift is equal 26', () => {
  expect(caesarCipher('string cheese', 26)).toBe('string cheese');
});
