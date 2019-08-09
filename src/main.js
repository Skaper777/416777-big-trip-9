import {renderInfo} from './components/info';
import {renderMenu} from './components/menu';
import {renderFilters} from './components/filters';
import {renderSort} from './components/sort';
import {renderTripDays} from './components/trip-days';
import {renderDay} from './components/day';
import {renderEditEvent} from './components/edit-form';
import {renderEvent} from './components/event';

const infoContainer = document.querySelector(`.trip-main__trip-info`);
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);
const tripContainer = document.querySelector(`.trip-events`);

const renderComponent = (container, render, place) => {
  container.insertAdjacentHTML(place, render());
};

renderComponent(infoContainer, renderInfo, `afterBegin`);
renderComponent(tripControlsContainer, renderMenu, `beforeend`);
renderComponent(tripControlsContainer, renderFilters, `beforeend`);
renderComponent(tripContainer, renderSort, `beforeend`);
renderComponent(tripContainer, renderTripDays, `beforeend`);

const daysContainer = document.querySelector(`.trip-days`);

const renderDays = (days) => {
  for (let i = 0; i < days; i++) {
    renderComponent(daysContainer, renderDay, `beforeend`);
  }
};

renderDays(1);

const eventContainers = document.querySelectorAll(`.trip-events__list`);

renderComponent(eventContainers[0], renderEditEvent, `beforeend`);

const renderEvents = (index, events) => {
  for (let i = 0; i < events; i++) {
    renderComponent(eventContainers[index], renderEvent, `beforeend`);
  }
};

renderEvents(0, 3);
