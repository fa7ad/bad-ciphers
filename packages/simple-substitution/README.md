# @bad-ciphers/simple-substitution

An implementation of the Simple Substitution Cipher.

## Usage

```js
import { encode, decode } from '@bad-ciphers/simple-substitution';

const encoded = encode('Hello World', 'veycibjhougdrqnkwflpzsatmx')
// encoded === 'Hiddn Anfdc'
const decoded = decode('Hiddn Anfdc!', 'veycibjhougdrqnkwflpzsatmx');
// decoded === 'Hello World'
```
