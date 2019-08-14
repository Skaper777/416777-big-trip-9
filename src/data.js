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
  get typeTitle() {
    switch (this.type) {
      case `taxi`:
        return `Taxi to`;

      case `bus`:
        return `Bus to`;

      case `train`:
        return `Train to`;

      default:
        return ``;
    }
  },
  city: [
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
  dateIn: `${Math.floor(Math.random() * 30)}/${Math.floor(Math.random() * 12)}/19`,
  timeIn: `${Math.floor(Math.random() * 23)} : ${Math.floor(Math.random() * 59)}`,
  dateOff: `${Math.floor(Math.random() * 30)}/${Math.floor(Math.random() * 12)}/19`,
  timeOff: `${Math.floor(Math.random() * 23)} : ${Math.floor(Math.random() * 59)}`,
  offer: {
    name: [
      `Add luggage`,
      `Switch to comfort class`,
      `Add meal`,
      `Choose seats`
    ][Math.floor(Math.random() * 2)],
    price: [
      30,
      100,
      15,
      5
    ],
    check: true
  },
});
