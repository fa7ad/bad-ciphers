# @bad-ciphers/xor

A simple XOR cipher.

## Usage

```js
import { encode, decode } from '@bad-ciphers/xor';

const encoded = encode('Hello World!', 0xffff);
// 0xffff is the key used to XOR each character of the string
const decoded = decode(encoded, 0xffff);
// decoded === 'Hello World!'
```
