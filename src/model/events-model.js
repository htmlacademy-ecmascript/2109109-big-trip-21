import { getNewEntry } from '../mock/event.js';
import { POINT_COUNT } from '../const.js';

class EventsModel {
  events = Array.from({ length: POINT_COUNT }, getNewEntry);

  getEvents() {
    return this.events;
  }
}

export { EventsModel };
