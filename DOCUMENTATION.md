# Documentation

## Table of Contents

1 [addProperty](addProperty)
1 [deleteProperty](deleteProperty)

## addProperty
This method allows you to add **new** property to the object.
It accepts target object and property which should be added to the target object and value of this property, and then returns new object with target property (passed as an argument).

```javascript
import { addProperty } from 'picklock';

const Start = {
  name: 'John',
  age: 20,
};

const Snow = addProperty(Stark, 'role', 'bastard');

console.log(Snow) // => { name: 'John', age: 20, role: 'bastard' }
// Original object is not mutated:
console.log(Stark) // => { name: 'John', age: 20 }
```

It will throw an Error in case if you will try to set property which already exist in the object

```javascript
console.log(addProperty(Snow, 'name', 'Ramsay')) // => Error: Property 'name' already exists in target Object!
```

## deleteProperty
This method allows you to delete property from the object without mutation of the origin.
It accepts target object and property which should be deleted from the target object, and then returns new object without target property (passed as an argument).
```javascript
import { deleteProperty } from 'picklock';

const Snow = {
  name: 'John',
  age: 20,
  role: 'Bastard',
}

const Stark = deleteProperty(Snow, 'role');
console.log(Stark) // => { name: 'John', age: 20 }
// Original object is not mutated:
console.log(Snow) // => { name: 'John', age: 20, role: 'Bastard' }
```

