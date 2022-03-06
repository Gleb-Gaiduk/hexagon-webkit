import { isPureObject } from '..';

type UnknownObject = { [key: string]: unknown };

type FilterObjectByKeysParams = {
  object: UnknownObject;
  keys: string[];
};

export const validateObjectArgument = (object: UnknownObject): void => {
  const isNotObjectParam = !isPureObject(object);

  if (isNotObjectParam || typeof object !== 'object') {
    throw new Error('Incorrect arguments: object argument shoud be a pure object');
  }
};

export const filterObjectByKeys = ({
  object,
  keys
}: FilterObjectByKeysParams): Partial<typeof object> => {
  validateObjectArgument(object);

  const filteredObject = Object.keys(object)
    .filter(property => keys?.includes(property))
    .reduce(
      (prevObjectState, currentObjectKey) => ({
        ...prevObjectState,
        [currentObjectKey]: object[currentObjectKey]
      }),
      {}
    );

  return filteredObject;
};
