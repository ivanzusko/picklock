# Documentation

## Table of Contents

1. [addProperty](#addproperty)
1. [cloneObject](#cloneobject)
1. [deleteProperty](#deleteproperty)
1. [updateProperty](#updateproperty)


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
**[⬆ back to top](#documentation)**



## cloneObject
### cloneObject(object)
This method allows to copy an object.
It accepts target object and returns new object with all the properties from target object(passed as an argument), which is copy of the target object and not a reference on it.

```javascript
import { addProperty, cloneObject } from 'picklock';

const Start = {
  name: 'John',
  age: 20,
};

// bad:
const Ramsay = Stark;
console.log(Starg === Ramsay) // => true (one object is reference on another)

// good:
const bastard = cloneObject(Stark);
console.log(Stark === bastard) // => false
 
console.log(bastard) // => { name: 'John', age: 20 }
console.log(Stark) // => { name: 'John', age: 20 }
console.log(addProperty(bastard, 'nick', 'Snow')) // => { name: 'John', age: 20, nick: 'Snow' }
console.log(Stark) // => { name: 'John', age: 20 }
console.log(bastard) // => { name: 'John', age: 20 }
```
**[⬆ back to top](#documentation)**



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
**[⬆ back to top](#documentation)**



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
**[⬆ back to top](#documentation)**
