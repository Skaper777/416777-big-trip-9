import {TripInfo} from './components/trip-info';
import {Menu} from './components/menu';
import {Filters} from './components/filters';
import {TotalPrice} from './components/total-price';
import {Sort} from './components/sort';
import {getMenu, getFilters} from './data';
import {render, position} from './utils';
import {events} from './components/points';
import {TripController} from './components/trip-controller';

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

renderTripInfo();
renderMenu(getMenu());
renderFilters(getFilters());
renderTotalPrice();
renderSort();


const tripController = new TripController(tripContainer, events);

tripController.init();

