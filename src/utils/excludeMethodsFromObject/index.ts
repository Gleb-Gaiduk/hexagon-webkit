import { filterObjectByKeys, validateObjectArgument } from '../filterObjectByKeys';

type ExcludeMethodsFromObject = {
  [key: string]: unknown;
};

export const excludeMethodsFromObject = (
  object: ExcludeMethodsFromObject
): Partial<typeof object> => {
  validateObjectArgument(object);
  const keysWithoutMethods = Object.entries(object).reduce((prevArr: string[], [key, value]) => {
    if (typeof value === 'function') {
      return prevArr;
    }

    return [...prevArr, key];
  }, []);

  return filterObjectByKeys({ object, keys: keysWithoutMethods });
};
