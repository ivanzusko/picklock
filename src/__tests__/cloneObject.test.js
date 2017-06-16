import { cloneObject } from '../cloneObject';

describe('#cloneObject', () => {
  const mockObj = {
    name: 'John',
    age: 20,
  };

  it('should return object with the same property', () => {
    expect(cloneObject(mockObj)).toEqual({
      name: 'John',
      age: 20,
    });
  });

  it('should return object which is not reference on the original one', () => {
    const newObject = cloneObject(mockObj);

    // we mutate original object:
    mockObj.name = 'Ramsay';

    // so, the cloned copy should stay as
    // initial original object (on the moment of cloning):
    expect(newObject).toEqual({
      name: 'John',
      age: 20,
    });
  });
});
