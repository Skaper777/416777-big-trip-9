import {render, position} from '../utils';
import {Point} from '../components/event';
import {EditEvent} from '../components/edit-form';
import moment from 'moment';
// let moment = require(`moment`);

export class PointController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;

    this._point = new Point(data);
    this._editForm = new EditEvent(data);

    this.init();
    this._checkType();
    console.log(moment);
  }

  _checkType() {
    const checkboxes = this._editForm.getElement().querySelectorAll(`.event__type-input`);

    for (let i = 0; i < checkboxes.length; i++) {
      if (this._editForm._type === checkboxes[i].value) {
        checkboxes[i].checked = true;
      }
    }
  }

  setDefaultView() {
    if (this._container.getElement().contains(this._editForm.getElement())) {
      this._container.replaceChild(this._point.getElement(), this._editForm.getElement());
    }
  }

  init() {
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.replaceChild(this._point.getElement(), this._editForm.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    this._point.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._container.replaceChild(this._editForm.getElement(), this._point.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    this._editForm.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._container.replaceChild(this._point.getElement(), this._editForm.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    this._editForm.getElement()
      .querySelector(`form`)
      .addEventListener(`submit`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(this._editForm.getElement().querySelector(`.event--edit`));

        const entry = {
          type: formData.get(`event-type`),
          destination: formData.get(`event-destination`),
          time: {
            timeIn: new Date(formData.get(`event-start-time`)),
            timeOut: new Date(formData.get(`event-end-time`))
          },
          price: formData.get(`event-price`),
          offers: new Set(formData.getAll(`event-offer-luggage`))
        };

        this._container.replaceChild(this._point.getElement(), this._editForm.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    render(this._container, this._point.getElement(), position.BEFOREEND);
  }
}
