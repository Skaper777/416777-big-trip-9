import {renderTripInfo, renderTotalPrice} from './components/trip-info';
import {renderMenu} from './components/menu';
import {renderFilters} from './components/filters';
import {renderSort} from './components/sort';
import {renderTripDays} from './components/trip-days';
import {renderDay} from './components/day';
import {renderEditEvent} from './components/edit-form';
import {getEvent, getMenu, getFilters} from './data';
import {getPoints} from './components/points';

const infoContainer = document.querySelector(`.trip-main__trip-info`);
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);
const tripContainer = document.querySelector(`.trip-events`);
const priceContainer = document.querySelector(`.trip-info__cost-value`);

const info = renderTripInfo();
const menu = renderMenu(getMenu());
const filters = renderFilters(getFilters());
const sort = renderSort();
const tripDays = renderTripDays();
const day = renderDay();
const editEvent = renderEditEvent(getEvent());
const points = getPoints(3);
const totalPrice = renderTotalPrice();

const renderComponent = (container, markUp, place) => {
  container.insertAdjacentHTML(place, markUp);
};

priceContainer.innerHTML = ``;

renderComponent(infoContainer, info, `afterBegin`);
renderComponent(priceContainer, totalPrice, `afterBegin`);
renderComponent(tripControlsContainer, menu, `beforeend`);
renderComponent(tripControlsContainer, filters, `beforeend`);
renderComponent(tripContainer, sort, `beforeend`);
renderComponent(tripContainer, tripDays, `beforeend`);

const daysContainer = document.querySelector(`.trip-days`);

const renderDays = (days) => {
  for (let i = 0; i < days; i++) {
    renderComponent(daysContainer, day, `beforeend`);
  }
};

renderDays(1);

const eventContainers = document.querySelectorAll(`.trip-events__list`);

renderComponent(eventContainers[0], editEvent, `beforeend`);
renderComponent(eventContainers[0], points, `beforeend`);
