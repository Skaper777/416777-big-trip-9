import {render, position} from '../utils';
import {Point} from '../components/event';
import {EditEvent} from '../components/edit-form';
import moment from 'moment';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/light.css';

export class PointController {
  constructor(container, data, onDataChange, onChangeView) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;
    this._data = data;
    this._point = new Point(data);
    this._editForm = new EditEvent(data);

    this.init();
    this._onTypeHandler();
  }

  _onTypeHandler() {
    const checkboxes = this._editForm.getElement().querySelectorAll(`.event__type-input`);

    for (let i = 0; i < checkboxes.length; i++) {
      if (this._editForm._type === checkboxes[i].value) {
        checkboxes[i].checked = true;
      }

      checkboxes[i].addEventListener(`click`, (evt) => {
        if (evt.target === checkboxes[i]) {
          this._editForm._type = checkboxes[i].value;
          this._editForm.getElement().querySelector(`.event__type-icon`).src = `img/icons/${this._editForm._type}.png`;
          this._editForm.getElement().querySelector(`.event__type-output`).textContent = `${this._editForm._getTitle()}`;
        }
      });
    }
  }

  setDefaultView() {
    if (this._container.getElement().contains(this._editForm.getElement())) {
      this._container.getElement().replaceChild(this._point.getElement(), this._editForm.getElement());
    }
  }

  init() {

    const times = this._editForm.getElement().querySelectorAll(`.event__input--time`);

    flatpickr(times[0], {
      altInput: true,
      allowInput: true,
      defaultDate: this._data.time.timeIn,
      enableTime: true,
      dateFormat: `Y-m-d H:i`,
    });

    flatpickr(times[1], {
      altInput: true,
      allowInput: true,
      defaultDate: this._data.time.timeOut,
      enableTime: true,
      dateFormat: `Y-m-d H:i`,
    });

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.getElement().replaceChild(this._point.getElement(), this._editForm.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    this._point.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._onChangeView();
        this._container.getElement().replaceChild(this._editForm.getElement(), this._point.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    this._editForm.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._container.getElement().replaceChild(this._point.getElement(), this._editForm.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    this._editForm.getElement()
      .querySelector(`form`)
      .addEventListener(`submit`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(this._editForm.getElement().querySelector(`.event--edit`));
        const offersDom = Array.from(this._editForm.getElement().querySelectorAll(`.event__offer-selector`));

        const entry = {
          type: formData.get(`event-type`),
          destination: formData.get(`event-destination`),
          time: {
            timeIn: moment(formData.get(`event-start-time`)),
            timeOut: formData.get(`event-end-time`),
            durationHours: ``,
            durationMinutes: ``,

            getDurationHours() {
              let time = this.timeOut - this.timeIn;
              this.durationHours = Math.floor(time / 3600000);
              this.durationMinutes = Math.floor((time / 60000) - this.durationHours * 60);
              return this.durationHours;
            },

            getDurationMinutes() {
              return this.durationMinutes;
            }
          },
          price: formData.get(`event-price`),
          offers: offersDom.map((item) => (
            {
              name: item.querySelector(`.event__offer-checkbox`).name,
              type: item.querySelector(`.event__offer-title`).textContent,
              price: item.querySelector(`.event__offer-price`).textContent,
              check: item.querySelector(`.event__offer-checkbox`).checked
            }
          )),
          photo() {
            return `http://picsum.photos/300/150?r=${Math.random()}`;
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`. `).sort(() => 0.5 - Math.random()),

        };

        this._onDataChange(entry, this._data);

        document.addEventListener(`keydown`, onEscKeyDown);
      });

    render(this._container.getElement(), this._point.getElement(), position.AFTERBEGIN);
  }
}
