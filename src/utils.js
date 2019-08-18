export const getRandomValue = (min, max) => {
  return Math.round((Math.random() * (max - min)) + min);
};

export const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getRandomList = (arr, value) => {
  let newList = arr.slice().sort(() => 0.5 - Math.random());
  newList.length = Math.round(Math.random() * value);
  return newList;
};

export const getPriceSum = (arr) => {
  if (!arr.length) {
    return 0;
  }
  return arr.map((ar) => ar.price).reduce((sum, current) => {
    return sum + current;
  });
};


