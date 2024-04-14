const createEnum = (keysValues) => {
  const enumObject = Object.keys(keysValues).reduce((obj, key) => {
    obj[key] = keysValues[key];
    return obj;
  }, {});

  return Object.freeze(enumObject);
};

export { createEnum };