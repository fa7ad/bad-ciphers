const UPPER_A_CHARCODE = 'A'.charCodeAt(0);
const UPPER_Z_CHARCODE = 'Z'.charCodeAt(0);
const LOWER_A_CHARCODE = 'a'.charCodeAt(0);
const LOWER_Z_CHARCODE = 'z'.charCodeAt(0);

export function encode(input: string, shift: number) {
  return input
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= UPPER_A_CHARCODE && charCode <= UPPER_Z_CHARCODE) {
        const charNum = charCode - UPPER_A_CHARCODE;
        const shiftedCharNum = (charNum + shift) % 26;
        return String.fromCharCode(shiftedCharNum + UPPER_A_CHARCODE);
      }
      if (charCode >= LOWER_A_CHARCODE && charCode <= LOWER_Z_CHARCODE) {
        const charNum = charCode - LOWER_A_CHARCODE;
        const shiftedCharNum = (charNum + shift) % 26;
        return String.fromCharCode(shiftedCharNum + LOWER_A_CHARCODE);
      }
      return char;
    })
    .join('');
}

export function decode(input: string, shift: number) {
  return encode(input, 26 - shift);
}
