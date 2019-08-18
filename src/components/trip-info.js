import {events} from './points';

export const renderTripInfo = () => {
  return `
  <div class="trip-info__main">
    <h1 class="trip-info__title">${getTripCities(events)}</h1>

    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
  </div>
  `;
};

export const renderTotalPrice = () => {
  let sum = 0;

  for (let i = 0; i < events.length; i++) {
    events[i].offer.randomList.forEach((el) => {
      sum += el.price;
    });
  }

  return sum;
};

const getTripCities = (arr) => {
  let cities = [];

  for (let el of arr) {
    let city = el.destination;
    cities.push(city);
  }

  let stringList = cities.length > 2 ? `${cities[0]} — ... — ${cities[cities.length - 1]}` : cities.join(` — `);

  return stringList;
};

const getTripDate = () => {

};
