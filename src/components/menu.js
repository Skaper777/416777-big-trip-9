export const renderMenu = ({list}) => {
  return `
  <nav class="trip-controls__trip-tabs  trip-tabs">
  ${list.map((item) => `
  <a class="trip-tabs__btn ${item.active ? `trip-tabs__btn--active` : ``}" href="#">${item.name}</a>
  `).join(``)}
  </nav>
  `;
};
