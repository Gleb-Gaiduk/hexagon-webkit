import { filterObjectByKeys } from '.';

const objectToFilter = {
  name: 'Hleb',
  age: 21,
  setName: () => console.log('hello world'),
  status: 'employee',
  departments: ['it', 'marketing', 'setName'],
  nested: [{ name: 'Hleb', age: 24 }]
};
const filterKeys = ['name', 'status', 'nested'];
const filteredResult = {
  name: 'Hleb',
  status: 'employee',
  nested: [{ name: 'Hleb', age: 24 }]
};

describe('filterObjectByKeys function', () => {
  it('should return a filtered object by provided array of keys', () => {
    const test = filterObjectByKeys({ object: { ...objectToFilter }, keys: [...filterKeys] });
    expect(test).toEqual(filteredResult);
  });
});
