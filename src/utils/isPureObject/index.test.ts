import { isPureObject } from '../index';

describe('isPureObject function', () => {
  it('should return false for param equals to null', () => {
    expect(isPureObject(null)).toEqual(false);
  });

  it('should return false for param equals to undefined', () => {
    expect(isPureObject(undefined)).toEqual(false);
  });

  it('should return false for param equals to a number', () => {
    expect(isPureObject(3)).toEqual(false);
  });

  it('should return false for param equals to a boolean', () => {
    expect(isPureObject(true)).toEqual(false);
  });

  it('should return false for param equals to empty array', () => {
    expect(isPureObject([])).toEqual(false);
  });

  it('should return false for param equals to not empty array', () => {
    expect(isPureObject(['hello', 'world', 1, {}])).toEqual(false);
  });

  it('should return true for param equals to empty object', () => {
    expect(isPureObject({})).toEqual(true);
  });

  it('should return true for param equals to not empty object', () => {
    expect(isPureObject({ name: 'Hleb', method: () => console.log('test'), age: 23 })).toEqual(
      true
    );
  });
});
