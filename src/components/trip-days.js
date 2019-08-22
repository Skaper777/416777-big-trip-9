import {createElement} from '../utils';

export class TripDays {
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
    return `<ul class="trip-days">

  </ul>
  `;
  }
}
