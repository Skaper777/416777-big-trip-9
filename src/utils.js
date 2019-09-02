import {events} from './components/points';

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

export const renderTotalPrice = () => {
  let sumEventsPrice = 0;
  let sumOffers = 0;

  for (let i = 0; i < events.length; i++) {
    let eventPrice = events[i].price;
    sumEventsPrice += eventPrice;

    events[i].offers.forEach((offer) => {
      let offersPrice = offer.price;
      sumOffers += offersPrice;
    });
  }
  return sumEventsPrice + sumOffers;
};

export const position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (container, element, place) => {
  switch (place) {
    case position.AFTERBEGIN:
      container.prepend(element);
      break;
    case position.BEFOREEND:
      container.append(element);
      break;
  }
};

