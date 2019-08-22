import {TripInfo} from './components/trip-info';
import {Menu} from './components/menu';
import {Filters} from './components/filters';
import {TotalPrice} from './components/total-price';
import {Sort} from './components/sort';
import {TripDays} from './components/trip-days';
import {Day} from './components/day';
import {Point} from './components/event';
import {EditEvent} from './components/edit-form';
import {getMenu, getFilters} from './data';
import {render, position} from './utils';
import {events} from './components/points';

const infoContainer = document.querySelector(`.trip-main__trip-info`);
const menuContainer = document.querySelector(`.trip-main__trip-controls`);
const tripContainer = document.querySelector(`.trip-events`);
const priceContainer = document.querySelector(`.trip-info__cost-value`);


const renderTripInfo = () => {
  const tripInfo = new TripInfo();

  render(infoContainer, tripInfo.getElement(), position.AFTERBEGIN);
};

const renderTotalPrice = () => {
  const price = new TotalPrice();
  priceContainer.innerHTML = ``;

  render(priceContainer, price.getElement(), position.AFTERBEGIN);
};

const renderMenu = (mock) => {
  const menu = new Menu(mock);

  render(menuContainer, menu.getElement(), position.AFTERBEGIN);
};

const renderFilters = (mock) => {
  const filters = new Filters(mock);

  render(menuContainer, filters.getElement(), position.BEFOREEND);
};

const renderSort = () => {
  const sort = new Sort();

  render(tripContainer, sort.getElement(), position.AFTERBEGIN);
};

const renderTripDays = () => {
  const tripDays = new TripDays();

  render(tripContainer, tripDays.getElement(), position.BEFOREEND);
};

const renderDay = () => {
  const day = new Day();

  render(daysContainer, day.getElement(), position.BEFOREEND);
};

const renderEvent = (mock) => {
  const point = new Point(mock);
  const editForm = new EditEvent(mock);

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
};

renderTripInfo();
renderMenu(getMenu());
renderFilters(getFilters());
renderTotalPrice();
renderSort();
renderTripDays();

const daysContainer = document.querySelector(`.trip-days`);

renderDay();

const eventContainer = document.querySelector(`.trip-events__list`);

events.forEach((mock) => renderEvent(mock));
