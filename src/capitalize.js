export default function capitalize(string) {
  if (!string || typeof string !== 'string') {
    return '';
  }

  const [firstChar, ...remainingChars] = string;
  return firstChar.toUpperCase() + remainingChars.join('');
}
