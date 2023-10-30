import { encode, decode } from './simple-substitution';

describe('simpleSubstitution', () => {
  const validKey = 'bcdefghijklmnopqrstuvwxyza'; // A valid substitution key

  it('should encode correctly', () => {
    // Test cases with a valid key
    expect(encode('hello', validKey)).toBe('ifmmp');
    expect(encode('HELLO', validKey)).toBe('IFMMP');
    expect(encode('Hello', validKey)).toBe('Ifmmp');

    // Test cases with non-alphabetical characters
    expect(encode('Hello, world!', validKey)).toBe('Ifmmp, xpsme!');

    // Test cases with emojis
    expect(encode('👍👍👍', validKey)).toBe('👍👍👍');
    expect(encode('Hello 👍', validKey)).toBe('Ifmmp 👍');
  });

  it('should decode correctly', () => {
    // Test cases with a valid key
    expect(decode('ifmmp', validKey)).toBe('hello');
    expect(decode('IFMMP', validKey)).toBe('HELLO');
    expect(decode('Ifmmp', validKey)).toBe('Hello');

    // Test cases with non-alphabetical characters
    expect(decode('Ifmmp, xpsme!', validKey)).toBe('Hello, world!');

    // Test cases with emojis
    expect(decode('👍👍👍', validKey)).toBe('👍👍👍');
    expect(decode('Ifmmp 👍', validKey)).toBe('Hello 👍');
  });

  it('should throw an error for invalid key', () => {
    const invalidKey = 'invalid'; // An invalid key that doesn't have 26 unique characters

    // Encoding and decoding should throw an error with an invalid key
    expect(() => encode('hello', invalidKey)).toThrowError(
      'The key must contain 26 unique characters.',
    );
    expect(() => decode('ifmmp', invalidKey)).toThrowError(
      'The key must contain 26 unique characters.',
    );
  });
});
