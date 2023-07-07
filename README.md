# Bad Ciphers

A collection of bad ciphers that should not be used in any serious application, but are still fun to play with.

## Usage

```typescript
import { encode, decode } from '@bad-ciphers/xor';

const encoded = encode('Hello World!', 0xffff);
const decoded = decode(encoded, 0xffff);
```

## Ciphers

- [XOR](./packages/xor/README.md)

## License

All packages are licensed under the [MIT License](./LICENSE).
