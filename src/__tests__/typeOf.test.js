import { typeOf } from '../typeOf';

describe('#typeOf', () => {
  const mockObj = {
    name: 'John',
    age: 20,
    role: 'Bastard',
  };

  it('should return the type of the given variable and only capitalized', () => {
    expect(typeOf(mockObj)).toBe('Object');
    expect(typeOf(mockObj)).not.toBe('object');
  });

  it('should compare the given variable with string(not case sensitive) which represents expected type', () => {
    expect(typeOf(mockObj, 'Object')).toBe(true);
    expect(typeOf(mockObj, 'object')).toBe(true);
    expect(typeOf(mockObj, 'String')).not.toBe(true);
  });
});
