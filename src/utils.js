const getRandomInteger = (a, b) =>
  Math.floor(Math.random() * (Math.abs(b - a) + 1) + Math.min(a, b));

const formalizeTime = (num) => (num < 10 ? `0${num}` : `${num}`);

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getRandomBoolean = () => Math.random() < 0.5;

const getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  return keys[getRandomInteger(0, keys.length - 1)];
};

const sortByDate = (arrayOfObjects) =>
  arrayOfObjects.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

export {
  getRandomInteger,
  formalizeTime,
  getRandomArrayElement,
  getRandomBoolean,
  getRandomKey,
  sortByDate,
};
