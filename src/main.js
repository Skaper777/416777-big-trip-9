import {TripInfo} from './components/trip-info';
import {Menu} from './components/menu';
import {Filters} from './components/filters';
import {TotalPrice} from './components/total-price';
import {Sort} from './components/sort';
import {TripDays} from './components/trip-days';
import {Day} from './components/day';
import {EditEvent} from './components/edit-form';
import {getMenu, getFilters} from './data';
import {getPoints} from './components/points';
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
  const event = new Event(mock);

  render(eventContainer, event.getElement(), position.BEFOREEND);
};

renderTripInfo();
renderMenu(getMenu());
renderFilters(getFilters());
renderTotalPrice();
renderSort();
renderTripDays();

const daysContainer = document.querySelector(`.trip-days`);
const eventContainer = document.querySelector(`.trip-events__list`);

renderDay();
events.forEach((mock) => renderEvent(mock));
