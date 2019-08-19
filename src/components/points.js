import {
  getEvent
} from '../data';
import {
  renderEvent
} from './event';

export const events = new Array(3).fill(``).map(getEvent).sort((a, b) => a.time.date - b.time.date);

export const getPoints = (val) => {
  let points = [];

  for (let i = 0; i < val; i++) {
    points.push(renderEvent(events[i]));
  }

  return points;
};
