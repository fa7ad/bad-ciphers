export function encode(input: string, key: string) {
  if (key.length !== 26 || new Set(key).size !== 26) {
    throw new Error('The key must contain 26 unique characters.');
  }

  const lowercaseKey = key.toLowerCase();
  const uppercaseKey = key.toUpperCase();
  const newKey = lowercaseKey + uppercaseKey;

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const substitutionMap: Record<string, string> = {};

  for (let i = 0; i < 52; i++) {
    substitutionMap[alphabet[i]] = newKey[i];
  }

  const encodedString = input
    .split('')
    .map((char) => (substitutionMap[char] ? substitutionMap[char] : char))
    .join('');

  return encodedString;
}

export function decode(input: string, key: string) {
  if (key.length !== 26 || new Set(key).size !== 26) {
    throw new Error('The key must contain 26 unique characters.');
  }

  const lowercaseKey = key.toLowerCase();
  const uppercaseKey = key.toUpperCase();
  const newKey = lowercaseKey + uppercaseKey;

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const substitutionMap: Record<string, string> = {};

  for (let i = 0; i < 52; i++) {
    substitutionMap[newKey[i]] = alphabet[i];
  }

  const decodedString = input
    .split('')
    .map((char) => (substitutionMap[char] ? substitutionMap[char] : char))
    .join('');

  return decodedString;
}
