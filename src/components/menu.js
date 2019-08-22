import {createElement} from '../utils';

export class Menu {
  constructor({list}) {
    this._list = list;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${this._list.map((item) => `
    <a class="trip-tabs__btn ${item.active ? `trip-tabs__btn--active` : ``}" href="#">${item.name}</a>
    `).join(``)}
    </nav>
  `;
  }
}
