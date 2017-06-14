# Documentation

## Table of Contents

1. [addProperty](#addProperty)
1. [deleteProperty](#deleteProperty)
1. [updateProperty](#updateProperty)


## addProperty
### addProperty(object, property, value)
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
### deleteProperty(object, property)

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



## updateProperty
### updateProperty(object, property, value)

This method allows you to update property in the object without mutation of the origin.
It accepts target object, property which should be updated in the target object, and new value of the given property, and then returns new object with the updated target property (passed as an argument).
```javascript
import { updateProperty } from 'picklock';

const Snow = {
  name: 'John',
  age: 20,
  role: 'Bastard',
}

const Stark = updateProperty(Snow, 'age', 21);

console.log(Stark) // => { name: 'John', age: 21, role: 'Bastard' }
// Original object is not mutated:
console.log(Snow) // => { name: 'John', age: 20, role: 'Bastard' }
```
