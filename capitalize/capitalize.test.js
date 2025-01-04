import { capitalize } from './capitalize';

test('One word', () => {
  expect(capitalize('robert')).toBe('Robert');
});

test('Already capitalized', () => {
  expect(capitalize('Robert')).toBe('Robert');
});

test('First character is not a letter', () => {
  expect(capitalize('4194547340')).toBe('4194547340');
});
