import { excludeMethodsFromObject } from '.';

describe('excludeMethodsFromObject function', () => {
  const objectWithMethods = {
    name: 'Hleb',
    age: 21,
    department: 'IT',
    sayName() {
      console.log('Hello IT!');
    },
    sayBye() {
      console.log('Bye IT!');
    }
  };

  const resultObject = {
    name: 'Hleb',
    age: 21,
    department: 'IT'
  };

  it('should filter object excluding methods', () => {
    expect(excludeMethodsFromObject(objectWithMethods)).toEqual(resultObject);
  });

  it('should throw error if not a pure object is passed as an argument', () => {
    const errorMessage = 'Incorrect arguments: object argument shoud be a pure object';
    //@ts-ignore
    expect(() => excludeMethodsFromObject([])).toThrowError(errorMessage);
    //@ts-ignore
    expect(() => excludeMethodsFromObject(null)).toThrowError(errorMessage);
    //@ts-ignore
    expect(() => excludeMethodsFromObject(undefined)).toThrowError(errorMessage);
  });
});
