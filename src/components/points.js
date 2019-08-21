import {
  getEvent
} from '../data';
import {
  renderEvent
} from './event';

const EVENT_COUNT = 3;

export const events = new Array(EVENT_COUNT).fill(``).map(getEvent).sort((a, b) => a.time.date - b.time.date);

export const getPoints = (val) => {
  let points = [];

  for (let i = 0; i < val; i++) {
    points.push(renderEvent(events[i]));
  }

  return points;
};
