import {formatTime} from '../utils';

export const renderEvent = ({type, getTitle, destination, time, price, offers}) => {
  return `
  <li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${getTitle} ${destination}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${formatTime(time.getRandomIn())}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${formatTime(time.getRandomOut())}</time>
      </p>
      <p class="event__duration">${time.getDurationHours()}H ${time.getDurationMinutes()}M</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${
  offers.map((arr) =>
    `<li class="event__offer"><span class="event__offer-title">${arr.type}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${arr.price}</span>
    </li>`).join(``)}

    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
  `;
};
