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

export const getTime = (value) => {
  return (value < 10 ? `0` + value : value);
};

export const formatDate = (date) => {
  date = new Date(date);

  const day = [
    date.getDate(),
    `0${date.getMonth() + 1}`,
    date
      .getFullYear()
      .toString()
      .slice(-2)
  ];

  const time = [getTime(date.getHours()), getTime(date.getMinutes())];

  return `${day.join(`/`)} ${time.join(`:`)}`;
};

export const formatTime = (data) => {
  data = new Date(data);

  const time = [getTime(data.getHours()), getTime(data.getMinutes())];

  return `${time.join(`:`)}`;
};
