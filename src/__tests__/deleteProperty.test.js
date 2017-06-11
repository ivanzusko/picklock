import { deleteProperty } from '../deleteProperty';

describe('#deleteProperty', () => {
  const mockObj = {
    name: 'John',
    age: 20,
    role: 'Bastard',
  };

  it('should delete target property from the given object', () => {
    expect(deleteProperty(mockObj, 'role')).toEqual({
      name: 'John',
      age: 20,
    });
  });
});
