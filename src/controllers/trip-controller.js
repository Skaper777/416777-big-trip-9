import {Sort} from '../components/sort';
import {TripDays} from '../components/trip-days';
import {Day} from '../components/day';
import {render, position} from '../utils';
import {EventMessage} from '../components/event-message';
import {PointController} from './point-controller';

export class TripController {
  constructor(container, events) {
    this._container = container;
    this._events = events;
    this._sort = new Sort();
    this._tripDays = new TripDays();
    this._day = new Day();

    this._subscriptions = [];
  }

  init() {
    render(this._container, this._sort.getElement(), position.AFTERBEGIN);
    render(this._container, this._tripDays.getElement(), position.BEFOREEND);
    render(this._tripDays.getElement(), this._day.getElement(), position.AFTERBEGIN);

    const sortBtns = document.querySelectorAll(`.trip-sort__btn`);


    for (let i = 0; i < sortBtns.length; i++) {
      sortBtns[i].addEventListener(`click`, (evt) => this._onSortLabelClick(evt));
    }

    this._events.forEach((mock) => this._renderEvent(mock));

    if (!this._container.contains(this._tripDays.getElement())) {
      this._renderEventMessage();
    }
  }

  _renderEvent(eventMock) {
    const eventsContainer = document.querySelector(`.trip-events__list`);
    const pointController = new PointController(eventsContainer, eventMock, this._onChangeView, this._onDataChange);
    this._subscriptions.push(pointController.setDefaultView.bind(pointController));
  }

  _onSortLabelClick(evt) {

    document.querySelector(`.trip-events__list`).innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `time`:
        const sortedByTime = this._events.slice().sort((a, b) => a.date - b.date);
        sortedByTime.forEach((mock) => this._renderEvent(mock));
        break;

      case `price`:
        const sortedByPrice = this._events.slice().sort((a, b) => a.price - b.price);
        sortedByPrice.forEach((mock) => this._renderEvent(mock));
        break;

      case `event`:
        this._events.forEach((mock) => this._renderEvent(mock));
        break;
    }
  }

  _renderEventMessage() {
    const message = new EventMessage();

    render(this._container, message.getElement(), position.AFTERBEGIN);
  }
}
