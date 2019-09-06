import {TripInfo} from './components/trip-info';
import {Menu} from './components/menu';
import {Filters} from './components/filters';
import {TotalPrice} from './components/total-price';
import {getMenu, getFilters} from './data';
import {render, position} from './utils';
import {events} from './components/points';
import {TripController} from './controllers/trip-controller';
import {Stats} from './components/stats';

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
  const stats = new Stats();

  render(menuContainer, menu.getElement(), position.AFTERBEGIN);
  render(tripContainer, stats.getElement(), position.BEFOREEND);

  menu.getElement().addEventListener(`click`, (e) => {
    e.preventDefault();

    if (e.target.tagName !== `A`) {
      return;
    }

    switch (e.target.innerText) {
      case `Table`:
        menu.getElement().querySelector(`a:first-of-type`).classList.add(`trip-tabs__btn--active`);
        menu.getElement().querySelector(`a:last-of-type`).classList.remove(`trip-tabs__btn--active`);
        stats.getElement().classList.add(`visually-hidden`);
        tripController.show();
        break;
      case `Stats`:
        menu.getElement().querySelector(`a:first-of-type`).classList.remove(`trip-tabs__btn--active`);
        menu.getElement().querySelector(`a:last-of-type`).classList.add(`trip-tabs__btn--active`);
        stats.getElement().classList.remove(`visually-hidden`);
        tripController.hide();
        break;
    }
  });
};

const addBtn = document.querySelector(`.trip-main__event-add-btn`);

addBtn.addEventListener(`click`, () => {
  tripController.createEvent();
});

const renderFilters = (mock) => {
  const filters = new Filters(mock);

  render(menuContainer, filters.getElement(), position.BEFOREEND);
};

const tripController = new TripController(tripContainer, events);

tripController.init();

renderMenu(getMenu());
renderFilters(getFilters());

const points = document.querySelectorAll(`.event`);

if (points.length > 0) {
  renderTripInfo();
  renderTotalPrice();
}
