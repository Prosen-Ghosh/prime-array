# prime-array
A JavaScript package for getting all prime numbers from an array.

![npm](https://img.shields.io/npm/v/prime-array.svg) ![license](https://img.shields.io/npm/l/prime-array.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/prime-array.svg)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/prime-array.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/prime-array.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/prime-array.svg)

## Features


## Install

`npm install --save prime-array`


## Usage

```js
const primeArray = require('prime-array');

primeArray([1,2,3,4,5,6,7,8,9,10]);
//=> [ 2, 3, 5, 7 ]

primeArray([]);
//=> ]

primeArray(); // without parameter this
//=> TypeError:  expects an Array got undefined

primeArray([{},1,2,3,4,5,6,7,8,9,10]);
//=> TypeError: expect number got object
```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
