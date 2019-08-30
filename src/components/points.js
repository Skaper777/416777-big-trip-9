import {
  getEvent
} from '../data';

const EVENT_COUNT = 3;

export const events = new Array(EVENT_COUNT).fill(``).map(getEvent).sort((a, b) => a.time.timeIn - b.time.timeIn);
