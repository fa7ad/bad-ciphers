export function encode(input: string, mask: number): string {
  return input
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) ^ mask))
    .join('');
}

// Magic of XOR is that it's symmetric, so decoding is the same as encoding.
export const decode = encode;
