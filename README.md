# Picklock
The picklock practically for any situation 🙃 - collection of usefull tools

<p align="center">
  <a href="https://www.npmjs.com/package/picklock" target="_blank"><img src="https://img.shields.io/badge/npm-publihsed-red.svg"></a>
  <a href="https://www.npmjs.com/package/picklock" target="_blank"><img src="https://img.shields.io/badge/test_coverage-100%25-brightgreen.svg"></a>
  <a href="https://github.com/ivanzusko/picklock/blob/master/DOCUMENTATION.md" target="_blank"><img src="https://img.shields.io/badge/Documentation-ready-brightgreen.svg"></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-0778b8.svg"></a>
</p>

Here you can read some [documentation](https://github.com/ivanzusko/picklock/blob/master/DOCUMENTATION.md).

## Installing
```sh
yarn add picklock --dev
```
or
```sh
npm i picklock -D
```

## Usage example
```javascript
import { addProperty, deleteProperty } from 'picklock';

const Snow = {
  name: 'John',
  age: 20,
  role: 'Bastard',
}

const Stark = deleteProperty(Snow, 'role');

console.log(Stark) // => { name: 'John', age: 20 }
console.log(Snow) // => { name: 'John', age: 20, role: 'Bastard' }
console.log(addProperty(Snow, 'father', 'Eddard')) // => { name: 'John', age: 20, role: 'Bastard', father: 'Eddard' }
console.log(addProperty(Snow, 'name', 'Ramsay')) // => Error: Property 'name' already exists in target Object!
```
