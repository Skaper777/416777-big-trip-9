import {events} from './points';
import {createElement} from '../utils';

export class TripInfo {
  constructor() {
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${getTripCities(events)}</h1>

      <p class="trip-info__dates">${getTripDate()}</p>
    </div>
    `;
  }
}

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