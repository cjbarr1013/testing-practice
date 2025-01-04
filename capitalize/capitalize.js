export function capitalize(str) {
  let firstChar = str.slice(0, 1);
  return firstChar.toUpperCase() + str.substring(1);
}
