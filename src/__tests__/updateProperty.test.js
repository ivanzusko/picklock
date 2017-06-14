import { updateProperty } from '../updateProperty';

describe('#updateProperty', () => {
  const mockObj = {
    name: 'John',
    age: 20,
    role: 'Bastard',
  };

  it('should update target property from the given object', () => {
    expect(updateProperty(mockObj, 'age', 21)).toEqual({
      name: 'John',
      age: 21,
      role: 'Bastard',
    });
  });
});
