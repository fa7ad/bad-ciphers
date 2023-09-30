import { describe, it, expect } from 'vitest';
import { encode, decode } from './xor';

describe('xor', () => {
  it('should encode correctly', () => {
    // charCode of 'a' is 97

    // single character
    expect(encode('a', 0xffff)).toEqual(String.fromCharCode(97 ^ 0xffff));

    // multiple characters
    expect(encode('abc', 0xffff)).toEqual(
      String.fromCharCode(97 ^ 0xffff) +
        String.fromCharCode(98 ^ 0xffff) +
        String.fromCharCode(99 ^ 0xffff),
    );

    // empty string
    expect(encode('', 0xffff)).toEqual('');

    // special characters
    expect(encode('!@#$', 0xffff)).toEqual('￞﾿ￜￛ');

    // unicode characters
    expect(encode('😀', 0xffff)).toEqual('⟂⇿');
  });

  it('should decode correctly', () => {
    expect(decode(String.fromCharCode(97 ^ 0xffff), 0xffff)).toEqual('a');

    expect(decode('ﾞﾝﾜ', 0xffff)).toEqual('abc');

    expect(decode('', 0xffff)).toEqual('');

    expect(decode('￞﾿ￜￛ', 0xffff)).toEqual('!@#$');

    expect(decode('⟂⇿', 0xffff)).toEqual('😀');
  });
});
