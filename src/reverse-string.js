export default function reverseString(string) {
  if (!string || typeof string !== 'string') {
    return '';
  }
  
  const reversedString = string.split('').reverse().join('');
  return reversedString;
}
