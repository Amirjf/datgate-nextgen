export const addValueToKey = (
  key: any,
  value: any,
  filtersMap: any,
  actions: any
) => {
  if (filtersMap.has(key)) {
    actions.set(key, [...filtersMap.get(key), value]);
  } else {
    actions.set(key, [value]);
  }
  return filtersMap;
};

export const removeValueFromKey = (
  key: any,
  value: any,
  filtersMap: any,
  actions: any
) => {
  if (filtersMap.has(key)) {
    let currentValue = filtersMap.get(key);
    let updatedValue = currentValue.filter((v: any) => v !== value);
    if (updatedValue.length === 0) {
      actions.delete(key);
    } else {
      actions.set(key, updatedValue);
    }
  }
  return filtersMap;
};
