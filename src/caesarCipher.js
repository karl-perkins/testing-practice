const alphabet = ' .,?!abcdefghijklmnopqrstuvwxyz'.split('');

export default function caesarCipher(string, shiftFactor) {
  const shiftedString = string.split('').map((char) => {
    const index = alphabet.indexOf(char.toLowerCase());
    let shiftedIndex = index + shiftFactor;

    if (shiftedIndex > alphabet.length - 1) {
      shiftedIndex -= alphabet.length;
    }

    if (char === char.toUpperCase()) {
      return alphabet.at(shiftedIndex).toUpperCase();
    }

    return alphabet.at(shiftedIndex);
  }).join('');

  return shiftedString;
}
