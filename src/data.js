import {getRandomList} from './utils';

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
    getTime(value) {
      return (value < 10 ? `0` + value : value);
    },

    formatDate(date) {
      date = new Date(date);

      const day = [
        date.getDate(),
        `0${date.getMonth() + 1}`,
        date
          .getFullYear()
          .toString()
          .slice(-2)
      ];

      const time = [this.getTime(date.getHours()), this.getTime(date.getMinutes())];

      return `${day.join(`/`)} ${time.join(`:`)}`;
    },

    formatTime(data) {
      data = new Date(data);

      const time = [this.getTime(data.getHours()), this.getTime(data.getMinutes())];

      return `${time.join(`:`)}`;
    },

    date: Date.now(),
    maxDate: 20000000,
    hoursIn: ``,
    hoursOut: ``,
    durationHours: ``,
    durationMinutes: ``,

    getRandomIn() {
      this.hoursIn = this.date + Math.random() * this.maxDate;
      return this.hoursIn;
    },

    getRandomOut() {
      this.hoursOut = (this.date + Math.random() * this.maxDate) + this.maxDate;
      return this.hoursOut;
    },

    getDurationHours() {
      let time = this.hoursOut - this.hoursIn;
      this.durationHours = Math.floor(time / 3600000);
      this.durationMinutes = Math.floor((time / 60000) - this.durationHours * 60);
      return this.durationHours;
    },

    getDurationMinutes() {
      return this.durationMinutes;
    }
  },

  offer: {
    randomList: getRandomList([
      {type: `Add luggage`, price: 10, check: false},
      {type: `Switch to comfort class`, price: 150, check: false},
      {type: `Add meal`, price: 2, check: false},
      {type: `Choose seats`, price: 9, check: false}
    ], 2),
  },
});

export const getMenu = () => ({
  list: [
    {name: `Table`, active: true},
    {name: `Stats`, active: false}
  ]
});

export const getFilters = () => ({
  list: [
    {name: `Everything`, checked: true},
    {name: `Future`, checked: false},
    {name: `Past`, checked: false}
  ]
});
