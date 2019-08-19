import {events} from './points';

export const renderTripInfo = () => {
  return `
  <div class="trip-info__main">
    <h1 class="trip-info__title">${getTripCities(events)}</h1>

    <p class="trip-info__dates">${getTripDate()}</p>
  </div>
  `;
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

const formatInfo = (arr) => {
  return arr.length > 2 ? `${arr[0]} — ... — ${arr[arr.length - 1]}` : arr.join(` — `);
};

const getTripCities = (arr) => {
  let cities = [];

  for (let el of arr) {
    let city = el.destination;
    cities.push(city);
  }

  let stringList = formatInfo(cities);

  return stringList;
};

const getTripDate = () => {
  let days = [];
  let date = events[0].time.date;
  let day = new Date(date).toString().split(` `);
  let newDay = [day[1], day[2]].join(` `);
  days.push(newDay);
  let stringList = formatInfo(days);
  return stringList;
};
