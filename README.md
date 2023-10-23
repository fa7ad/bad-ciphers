# Bad Ciphers

A collection of bad ciphers that should not be used in any serious application, but are still fun to play with.

## Usage

```typescript
import * as xor from '@bad-ciphers/xor';
import * as caesar from '@bad-ciphers/caesar';

const encoded = xor.encode('Hello World!', 0xffff);
const decoded = xor.decode(encoded, 0xffff);

const caesar_ed = caesar.encode('Hello World!', 7);
const uncaesar_ed = caesar.decode(caesar_ed, 7);
```

## Ciphers

- [XOR](./packages/xor/README.md)
- [Caesar](./packages/caesar/README.md)

## License

All packages are licensed under the [MIT License](./LICENSE).
