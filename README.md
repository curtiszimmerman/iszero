# iszero

Test if given thing is a number with a value of zero.

## Usage

```js
var isZero = require('iszero');

console.log( isZero(0) ); // true
console.log( isZero(1) ); // false

// special feature: also works with non-numeric input
console.log( isZero(' ') ); // false!
```

## Installation

With [npm](http://npmjs.org) do:

```bash
$ npm install iszero
```

## Contributions

Contributions are welcome, however PRs that are mostly stylistic or semantic in nature will not be accepted.

## License

GPLv3
