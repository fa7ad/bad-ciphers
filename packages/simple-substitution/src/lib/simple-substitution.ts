export function encode(input: string, key: string) {
  if (key.length !== 26 || new Set(key).size !== 26) {
    throw new Error('The key must contain 26 unique characters.');
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const substitutionMap: Record<string, string> = {};

  for (let i = 0; i < 26; i++) {
    substitutionMap[alphabet[i]] = key[i];
  }

  const substitutedString = input
    .split('')
    .map((char) => (substitutionMap[char] ? substitutionMap[char] : char))
    .join('');

  return substitutedString;
}

export function decode(input: string, key: string) {
  if (key.length !== 26 || new Set(key).size !== 26) {
    throw new Error('The key must contain 26 unique characters.');
  }

  const reverseKey = key.split('').reverse().join('');
  return encode(input, reverseKey);
}