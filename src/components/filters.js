import {createElement} from '../utils';

export class Filters {
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
    return `<form class="trip-filters" action="#" method="get">
    ${this._list.map((item) =>
    `
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${item.checked ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-everything">${item.name}</label>
      </div>
      `).join(``)}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  `;
  }
}
