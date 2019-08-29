import {render, position} from '../utils';
import {Point} from '../components/event';
import {EditEvent} from '../components/edit-form';

export class PointController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;

    this._point = new Point(data);
    this._editForm = new EditEvent(data);

    this.init();
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
      .addEventListener(`submit`, () => {
        this._container.replaceChild(this._point.getElement(), this._editForm.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    render(this._container, this._point.getElement(), position.BEFOREEND);
  }
}
