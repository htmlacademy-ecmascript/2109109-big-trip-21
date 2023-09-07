import {
  DESTINATION_DESCRIPTIONS,
  PHOTO_BORDER_RANGES,
  PHOTO_COUNT_RANGE,
  PHOTO_SOURCE,
} from '../const.js';
import { createElement } from '../render.js';
import { getRandomInteger } from '../utils.js';

function createPhotos() {
  const count = getRandomInteger(PHOTO_COUNT_RANGE.min, PHOTO_COUNT_RANGE.max);
  let photos = '';
  for (let i = 0; i < count; i++) {
    photos += `<img class="event__photo" src="${PHOTO_SOURCE}${getRandomInteger(
      PHOTO_BORDER_RANGES.min,
      PHOTO_BORDER_RANGES.max,
    )}" alt="Event photo">\n`;
  }

  return photos;
}

function createDestinationTemplate({ destination }) {
  return `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${
  DESTINATION_DESCRIPTIONS[destination]
}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">

          ${createPhotos()}
        </div>
      </div>
    </section>`;
}

class EventDestinationView {
  constructor(event) {
    this.event = event;
  }

  getTemplate() {
    return createDestinationTemplate(this.event);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  deleteElement() {
    this.element.remove();
  }
}
export { EventDestinationView };
