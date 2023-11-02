function subChars(substitutionMap: Map<string, string>, input: string) {
  return Array.from(input, (char) => substitutionMap.get(char) ?? char).join(
    ''
  );
}

function normalizeKey(key: string) {
  const keyChars = key.split('');

  const keyset = new Set(keyChars);
  if (keyChars.length !== keyset.size && keyset.size !== alphabet.length / 2) {
    throw new Error('The key must contain 26 unique characters.');
  }

  return key.toLowerCase() + key.toUpperCase();
}

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function encode(input: string, key: string) {
  const caseInsensitiveKey = normalizeKey(key);

  const substitutionMap = new Map<string, string>(
    alphabet.split('').map((char, index) => [char, caseInsensitiveKey[index]])
  );

  return subChars(substitutionMap, input);
}

export function decode(input: string, key: string) {
  const caseInsensitiveKey = normalizeKey(key);

  const substitutionMap = new Map<string, string>(
    Array.from(alphabet, (char, index) => [caseInsensitiveKey[index], char])
  );

  return subChars(substitutionMap, input);
}
