export const isPureObject = (param: unknown): boolean => {
  return (
    typeof param === 'object' && !Array.isArray(param) && param !== null && param !== undefined
  );
};
