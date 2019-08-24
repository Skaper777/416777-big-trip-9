import {TripDays} from './trip-days';
import {Day} from './day';
import {render, position} from '../utils';
import {Point} from './event';
import {EditEvent} from './edit-form';
import {EventMessage} from './event-message';

export class TripController {
  constructor(container, events) {
    this._container = container;
    this._events = events;
    this._tripDays = new TripDays();
    this._day = new Day();
  }

  init() {
    render(this._container, this._tripDays.getElement(), position.BEFOREEND);
    render(this._tripDays.getElement(), this._day.getElement(), position.AFTERBEGIN);

    this._events.forEach((mock) => this._renderEvent(mock));

    if (!this._container.contains(this._tripDays.getElement())) {
      this._renderEventMessage();
    }
  }

  _renderEvent(eventMock) {
    const point = new Point(eventMock);
    const editForm = new EditEvent(eventMock);
    const eventContainer = document.querySelector(`.trip-events__list`);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        eventContainer.replaceChild(point.getElement(), editForm.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    point.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        eventContainer.replaceChild(editForm.getElement(), point.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    editForm.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        eventContainer.replaceChild(point.getElement(), editForm.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    editForm.getElement()
      .querySelector(`form`)
      .addEventListener(`submit`, () => {
        eventContainer.replaceChild(point.getElement(), editForm.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    render(eventContainer, point.getElement(), position.AFTERBEGIN);
  }

  _renderEventMessage() {
    const message = new EventMessage();

    render(this._container, message.getElement(), position.AFTERBEGIN);
  }
}
