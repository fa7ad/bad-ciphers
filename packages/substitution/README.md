# @bad-ciphers/substitution

An implementation of Substitution Cipher.

## Usage

```js
import { encode, decode } from '@bad-ciphers/substitution/simple';

const encoded = encode('Hello World', 'veycibjhougdrqnkwflpzsatmx');
// encoded === 'Hiddn Anfdc'
const decoded = decode('Hiddn Anfdc!', 'veycibjhougdrqnkwflpzsatmx');
// decoded === 'Hello World'
```
