import {
  getRandomList,
  getRandomValue
} from './utils';

export const getEvent = () => ({
  type: [
    `taxi`,
    `bus`,
    `train`,
    `ship`,
    `transport`,
    `drive`,
    `flight`,
    `check-in`,
    `sightseeing`,
    `restaurant`
  ][Math.floor(Math.random() * 10)],

  get getTitle() {
    switch (this.type) {
      case `taxi`:
        return `Taxi to`;

      case `bus`:
        return `Bus to`;

      case `train`:
        return `Train to`;

      case `ship`:
        return `Ship to`;

      case `transport`:
        return `Transport to`;

      case `drive`:
        return `Drive to`;

      case `flight`:
        return `Flight to`;

      case `check-in`:
        return `Check-in in`;

      case `sightseeing`:
        return `Sightseeing in`;

      case `restaurant`:
        return `Restaurant in`;

      default:
        return ``;
    }
  },

  destination: [
    `Saint-Petersburg`,
    `Moscow`,
    `Minsk`,
    `Kiev`,
    `Helsinki`,
  ][Math.floor(Math.random() * 5)],

  photo() {
    return `http://picsum.photos/300/150?r=${Math.random()}`;
  },

  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`. `).sort(() => 0.5 - Math.random()),

  time: {
    timeIn: Date.now() + Math.random() * 50000000,
    timeOut: (Date.now() + Math.random() * 50000000) + 50000000,
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

  price: getRandomValue(10, 200),

  offers: getRandomList([{
    type: `Add luggage`,
    price: 10,
    check: Boolean(Math.round(Math.random))
  },
  {
    type: `Switch to comfort class`,
    price: 150,
    check: Boolean(Math.round(Math.random))
  },
  {
    type: `Add meal`,
    price: 2,
    check: Boolean(Math.round(Math.random))
  },
  {
    type: `Choose seats`,
    price: 9,
    check: Boolean(Math.round(Math.random))
  }
  ], 2),

});

export const getMenu = () => ({
  list: [{
    name: `Table`,
    active: true
  },
  {
    name: `Stats`,
    active: false
  }
  ]
});

export const getFilters = () => ({
  list: [{
    name: `Everything`,
    checked: true
  },
  {
    name: `Future`,
    checked: false
  },
  {
    name: `Past`,
    checked: false
  }
  ]
});
