import {renderInfo} from './components/info';
import {renderMenu} from './components/menu';
import {renderFilters} from './components/filters';
import {renderSort} from './components/sort';
import {renderTripDays} from './components/trip-days';
import {renderDay} from './components/day';
import {renderEditEvent} from './components/edit-form';
import {renderEvent} from './components/event';
import {getEvent} from './data';

const infoContainer = document.querySelector(`.trip-main__trip-info`);
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);
const tripContainer = document.querySelector(`.trip-events`);

const info = renderInfo();
const menu = renderMenu();
const filters = renderFilters();
const sort = renderSort();
const tripDays = renderTripDays();
const day = renderDay();
const editEvent = renderEditEvent(getEvent());
const eventDay = renderEvent();

const renderComponent = (container, markUp, place) => {
  container.insertAdjacentHTML(place, markUp);
};

renderComponent(infoContainer, info, `afterBegin`);
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

const renderEvents = (index, events) => {
  for (let i = 0; i < events; i++) {
    renderComponent(eventContainers[index], eventDay, `beforeend`);
  }
};

renderEvents(0, 3);
