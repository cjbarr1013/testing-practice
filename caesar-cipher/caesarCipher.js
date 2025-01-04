export function caesarCipher(str, shift) {
  const shiftedAlphabet = getShiftedAlphabetObj(shift);

  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    const oldChar = str.charAt(i);
    const newChar = shiftedAlphabet[oldChar.toLowerCase()];
    if (newChar && isCapitalized(oldChar)) {
      newStr += newChar.toUpperCase();
    } else if (newChar) {
      newStr += newChar;
    } else {
      newStr += str.charAt(i);
    }
  }

  return newStr;
}

function getShiftedAlphabetObj(shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // Shift alphabet into array
  let shiftedAlphabet = [];
  shiftedAlphabet = alphabet.splice(shift);
  shiftedAlphabet.push(...alphabet);

  // Transform array into object
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let shiftedAlphabetObj = {};
  for (let i = 0; i < alphabet.length; i++) {
    shiftedAlphabetObj[alphabet[i]] = shiftedAlphabet[i];
  }

  return shiftedAlphabetObj;
}

function isCapitalized(char) {
  return char == char.toUpperCase();
}
