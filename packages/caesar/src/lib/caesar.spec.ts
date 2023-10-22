import { encode, decode } from './caesar';

describe('caesar', () => {
  it('should encode correctly', () => {
    // lowercase
    expect(encode('hello', 1)).toBe('ifmmp');
    expect(encode('hello', 2)).toBe('jgnnq');
    expect(encode('hello', 3)).toBe('khoor');
    expect(encode('hello', 4)).toBe('lipps');

    // uppercase
    expect(encode('HELLO', 1)).toBe('IFMMP');
    expect(encode('HELLO', 2)).toBe('JGNNQ');
    expect(encode('HELLO', 3)).toBe('KHOOR');
    expect(encode('HELLO', 4)).toBe('LIPPS');

    // mixed
    expect(encode('Hello', 1)).toBe('Ifmmp');
    expect(encode('Hello', 2)).toBe('Jgnnq');
    expect(encode('Hello', 3)).toBe('Khoor');
    expect(encode('Hello', 4)).toBe('Lipps');

    // non-alphabetical characters
    expect(encode('Hello, world!', 1)).toBe('Ifmmp, xpsme!');
    expect(encode('Hello, world!', 2)).toBe('Jgnnq, yqtnf!');
    expect(encode('Hello, world!', 3)).toBe('Khoor, zruog!');
    expect(encode('Hello, world!', 4)).toBe('Lipps, asvph!');

    // unicode characters (emoji)
    expect(encode('👍👍👍👍👍👍👍👍👍👍👍👍👍👍', 1)).toBe(
      '👍👍👍👍👍👍👍👍👍👍👍👍👍👍',
    );
    expect(encode('👍👍👍👍👍👍👍👍👍👍👍👍👍👍', 2)).toBe(
      '👍👍👍👍👍👍👍👍👍👍👍👍👍👍',
    );

    // boundary conditions
    expect(encode('a', 1)).toBe('b');
    expect(encode('z', 1)).toBe('a');
    expect(encode('A', 1)).toBe('B');
    expect(encode('Z', 1)).toBe('A');

    // mod
    expect(encode('hello', 26)).toBe('hello');
  });

  it('should decode correctly', () => {
    // lowercase
    expect(decode('ifmmp', 1)).toBe('hello');
    expect(decode('jgnnq', 2)).toBe('hello');
    expect(decode('khoor', 3)).toBe('hello');
    expect(decode('lipps', 4)).toBe('hello');

    // uppercase
    expect(decode('IFMMP', 1)).toBe('HELLO');
    expect(decode('JGNNQ', 2)).toBe('HELLO');
    expect(decode('KHOOR', 3)).toBe('HELLO');
    expect(decode('LIPPS', 4)).toBe('HELLO');

    // mixed
    expect(decode('Ifmmp', 1)).toBe('Hello');
    expect(decode('Jgnnq', 2)).toBe('Hello');
    expect(decode('Khoor', 3)).toBe('Hello');
    expect(decode('Lipps', 4)).toBe('Hello');

    // non-alphabetical characters
    expect(decode('Ifmmp, xpsme!', 1)).toBe('Hello, world!');
    expect(decode('Jgnnq, yqtnf!', 2)).toBe('Hello, world!');
    expect(decode('Khoor, zruog!', 3)).toBe('Hello, world!');
    expect(decode('Lipps, asvph!', 4)).toBe('Hello, world!');

    // unicode characters (emoji)
    expect(decode('👍👍👍👍👍👍👍👍👍👍👍👍👍👍', 1)).toBe(
      '👍👍👍👍👍👍👍👍👍👍👍👍👍👍',
    );
    expect(decode('👍👍👍👍👍👍👍👍👍👍👍👍👍👍', 2)).toBe(
      '👍👍👍👍👍👍👍👍👍👍👍👍👍👍',
    );

    // boundary conditions
    expect(decode('b', 1)).toBe('a');
    expect(decode('a', 1)).toBe('z');
    expect(decode('B', 1)).toBe('A');
    expect(decode('A', 1)).toBe('Z');

    // mod
    expect(decode('hello', 26)).toBe('hello');
  });
});
