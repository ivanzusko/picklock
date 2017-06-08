import { addProperty } from '../addProperty';

describe('#addProperty', () => {
  const mockObj = {
    name: 'John',
    age: 20,
  };

  it('should return object with new property', () => {
    expect(addProperty(mockObj, 'role', 'bastard')).toEqual({
      name: 'John',
      age: 20,
      role: 'bastard',
    });
  });
});
