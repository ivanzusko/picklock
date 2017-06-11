# Picklock
The picklock practically for any situation 🙃 - collection of usefull tools

Here you can read some [documentation](https://github.com/ivanzusko/picklock/blob/master/DOCUMENTATION.md).

## Installing
```sh
yarn add picklock --dev
```
or
```sh
npm i picklock -D
```

## Usage
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
