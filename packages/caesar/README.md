# @bad-ciphers/caesar

An implementation of the Caesar Cipher.

## Usage

```js
import { encode, decode } from '@bad-ciphers/caesar';

const encoded = encode('Hello World!', 7);
// This will encode the string by shifting each letter by 7
const decoded = decode('Olssv Dvysk!', 7);
// decoded === 'Hello World!'
```
