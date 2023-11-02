# Bad Ciphers

A collection of bad ciphers that should not be used in any serious application, but are still fun to play with.

## Usage

```typescript
import * as xor from '@bad-ciphers/xor';
import * as caesar from '@bad-ciphers/caesar';
import * as simpleSubstitution from '@bad-ciphers/substitution/simple';

const xor_encoded = xor.encode('Hello World!', 0xffff);
const xor_decoded = xor.decode(encoded, 0xffff);

const caesar_encoded = caesar.encode('Hello World!', 7);
const caesar_decoded = caesar.decode(caesar_ed, 7);

const substitution_encoded = simpleSubstitution.encode('Hello World!', 'zyxwvutsrqponmlkjihgfedcba');
const substitution_decoded = simpleSubstitution.decode(substitution_encoded, 'zyxwvutsrqponmlkjihgfedcba');
```

## Ciphers

- [XOR](./packages/xor/README.md)
- [Caesar](./packages/caesar/README.md)
- [Simple Substitution](./packages/substitution/README.md)

## License

All packages are licensed under the [MIT License](./LICENSE).
